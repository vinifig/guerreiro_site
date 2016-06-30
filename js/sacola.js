var Sacola = new (function(){
  this.itemTemplate = `<div class="item item-thumbnail-left">
    <img src="${app_path}img/hamburger.png">
    <h2><<titulo>></h2>
    <div class="btn-item item-qtd-buttons">
      <a href="#" class="button-left button icon ion-minus button-dark"></a>
      <input type="text" class="qtdItem" value="<<qtd>>">
      <input type="hidden" class="codItem" value="<<item>>">
      <a href="#" class="button-right button icon ion-plus button-dark"></a>
    </div>
  </div>`;
  this.sacolaVaziaTemplate = `<div class="item">
    <h2>Sua sacola está vazia</h2>
    <a href="cardapio.php">Adicione items agora mesmo</a>
  </div>`;
  this.codigo_pedido = -1;
  // preparacaoDePedido
  var getPedidoComItens = function(data, callback){
    pedido.getOne(Sacola.codigo_pedido, function(result){
      if(result.codigo_pedido != undefined)
        return callback(result);
      return callback(data);
    });
  }
  this.getPedido = function(callback){
    pedido.getByUser(getUser().num_celular,function(data){
      for(var i = 0; i < data.length; i++){
        if(data[i].status == 1){
          Sacola.codigo_pedido = data[i].codigo_pedido;
          return getPedidoComItens(data, callback);
        }
      }
      callback({});
    });
  }
  this.inflateItems = function(data,callback){
    console.log(data);
    if(data == undefined || data[0] == undefined){
      $('.sacolaContainer .itemsContainer').append(Sacola.sacolaVaziaTemplate);
      return callback();

    }
    for(var i = 0; i < data.length; i++){
      var item = Sacola.itemTemplate;
      item = item.replace("<<item>>", data[i].codigo_item);
      item = item.replace("<<titulo>>", data[i].nome);
      item = item.replace("<<qtd>>", data[i].quantidade);
      $('.sacolaContainer .itemsContainer').append(item);
    }
    return callback();
  }
  this.sacolaSubmit = function(e){
    var data = $(this).serializeArray();
    pedido.confirmaPedido({
      pedido: Sacola.codigo_pedido,
      data_entrega: data[0].value + " " + data[1].value + ":00",
      descricao: data[2].value,
      pagamento: data[3].value
    },function(){
      console.log("Pedido de confirmação enviado");
      location.href="cardapio.php";
    })
    console.log(data);
    e.preventDefault();
  }
})()

$(document).ready(function() {
  if(document.querySelector(".sacolaContainer")){
    Sacola.getPedido(function(data){
        Sacola.inflateItems(data.itemsMenu,function(){
          $(".preco .dataToModify").text("R$: "+(data.preco_pedido || "00.00"));
          Cardapio.set_codigo_pedido(data.codigo_pedido);
          $(".button-left.ion-minus").on("click", Cardapio.diminuiItem)
          $(".button-right.ion-plus").on("click", Cardapio.aumentaItem)
          $(".qtdItem").on("change", Cardapio.updateItem)
          $(".sacolaContainer").on("submit", Sacola.sacolaSubmit);
        });

    });
  }
});
