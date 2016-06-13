var Cardapio = new (function(){
  this.itemTemplate = `<div class="col col-25">
    <div class="card">
      <div   class="item item-image">
        <img src="${app_path}img/hamburger.png">
      </div>
      <div class="item">
        <h2><<titulo>></h2>
        <p><<descricao>></p>
        <p><<ingrediente>></p>
      </div>
      <div class="item item-qtd-buttons">
        <button class="button-left button icon ion-minus button-dark"></button>
        <input type="text" class="qtdItem" value="<<qtd>>">
        <input type="hidden" class="codItem" value="<<item>>">
        <button class="button-right button icon ion-plus button-dark"></button>
      </div>
    </div>
  </div>`;
  this.codigo_pedido = -1;
  // preparacaoDePedido

  this.set_codigo_pedido = function(cod){
    this.codigo_pedido = cod;
  }
  this.getPedido = function(callback){
    pedido.getByUser(getUser().num_celular,function(data){
      for(var i = 0; i < data.length; i++){
        if(data[i].status == 1){
          Cardapio.codigo_pedido = data[i].codigo_pedido;
          return callback(data[i]);
        }
      }
      callback({});
    });
  }
  this.preparaPedido = function(callback){
    pedido.getByUser(getUser().num_celular,function(data){
      for(var i = 0; i < data.length; i++)
        if(data[i].status == 1){
          Cardapio.codigo_pedido = data[i].codigo_pedido;
          return callback(data[i]);
        }
      if(checkUserLevel() == 'cliente')
        pedido.createPedido(getUser().num_celular, "none", callback)
      else
        pedido.createPedido("none", getUser().cpf_funcionario, callback)
    })
  }

  this.updateItem = function(item){
    var pedidoItem = item;
    if(pedidoItem.timeStamp != undefined)
      pedidoItem = this.parentNode.parentNode;
    var quantidade = $(pedidoItem).find('.qtdItem').val();
    var codigoItem = $(pedidoItem).find(".codItem").val();
    pedido.updatePedidoItem({pedido: Cardapio.codigo_pedido, item : codigoItem, quantidade}, function(data){
      console.log("Pedido: #"+Cardapio.codigo_pedido+" atualizado");
    })
    // let sql = `call atualiza_item_menu_pedido(${req.dbEntity.escape(req.body.pedido)}, ${req.dbEntity.escape(req.body.item)}, ${req.dbEntity.escape(req.body.quantidade)});`;
  }

  this.aumentaItem = function(){
    var pedidoItem = this.parentNode.parentNode;
    var quantidade = parseInt($(pedidoItem).find(".qtdItem").val());
    $(pedidoItem).find(".qtdItem").val(++quantidade);
    Cardapio.updateItem(pedidoItem);
  }
  this.diminuiItem = function(){
    var pedidoItem = this.parentNode.parentNode;
    var quantidade = parseInt($(pedidoItem).find(".qtdItem").attr('value') < 2 ? 1 : $(pedidoItem).find(".qtdItem").val());
    $(pedidoItem).find(".qtdItem").val(--quantidade);
    Cardapio.updateItem(pedidoItem);
  }

  // constroi cardapio

  var inflaCardapio = function(itensToInflate){
    for(var i = 0, j = 0; i<itensToInflate.length; i++, j = (j+1) % 4){
      var row;
      var item = Cardapio.itemTemplate;
      for(var k = 0; k < itensToInflate[i].ingredientes.length; k++){
        itensToInflate[i].ingredientes[k] = itensToInflate[i].ingredientes[k].nome;
      }
      if(j == 0){
        row = document.createElement('div');
        $(row).attr("class","row responsive-sm");
        document.querySelector(".cardapioContainer").appendChild(row);
      }
      row = document.querySelector(".row.responsive-sm:last-child");
      item = item.replace("<<titulo>>", itensToInflate[i].nome_item);
      item = item.replace("<<descricao>>", itensToInflate[i].descricao_item);
      item = item.replace("<<ingrediente>>", itensToInflate[i].ingredientes.join(", "));
      item = item.replace("<<item>>", itensToInflate[i].codigo_item);
      item = item.replace("<<qtd>>", itensToInflate[i].quantidade);
      // <h2><<titulo>></h2>
      // <p><<descricao>></p>
      // <p><<ingrediente>></p>
      // <input type="text" class="qtdItem" value="<<qtd>>">
      // <input type="hidden" class="codItem" value="<<item>>">
      row.innerHTML += item;
    }
  }

  this.inflate = function(callback){
    console.log("teste");
    cardapio.getAll(function(itemsMenu){
      console.log("teste");
      pedido.getOne(Cardapio.codigo_pedido, function(pedido){

        var itemsPedido = pedido.itemsMenu || [];
        for(var i = 0; i < itemsMenu.length; i++){
          itemsMenu[i].quantidade = 0;
          for(var j = 0; j < itemsPedido.length; j++)
            if(itemsPedido[j].codigo_item == itemsMenu[i].codigo_item){
              itemsMenu[i].quantidade = itemsPedido[j].quantidade;

            }
        }
        console.log(itemsPedido, itemsMenu)
        inflaCardapio(itemsMenu);
        callback();
      })
    });

  }
})()

$(document).ready(function() {
  if(document.querySelector(".cardapioContainer")){
    Cardapio.preparaPedido(function(){
      Cardapio.inflate(function(){
        $(".button-left.ion-minus").on("click", Cardapio.diminuiItem)
        $(".button-right.ion-plus").on("click", Cardapio.aumentaItem)
        $(".qtdItem").on("change", Cardapio.updateItem)
      });
    });
  }
});
