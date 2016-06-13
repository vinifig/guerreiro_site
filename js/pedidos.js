var Pedido = new (function(){
  this.pedidoList = `<a class="item item-thumbnail-left" href="pedido.php?id=<<pedido>>">
    <img src="${app_path}img/conta.png">
    <h2>#<<pedido>></h2>
    <p>Data Entrega: <<dentrega>> Hora Entrega: <<hentrega>> PREÇO: R$ <<preco>> Data Pedido: <<dpedido>> Hora Pedido: <<hpedido>></p>
  </a>`;

  this.itemMenuList = `<div class="item">
    <p><<item>>: <<qtd>> unid.</p>
  </div>`;
  this.loadPedidos = function(callback){
    pedido.getByUser(getUser().num_celular,function(data){
      for(var i = 0; i < data.length; i++){
        if(data[i].status == 1)
          delete data[i];
      }
      callback(data);
    });
  }

  this.inflatePedido = function(data){
    for(var i = 0; i < data.length; i++){
      var itemToAdd = Pedido.pedidoList;
      var datahora_pedido = new Date(data[i].datahora_pedido)
      var data_pedido = formatDate(datahora_pedido);
      var hora_pedido = formatTime(datahora_pedido);
      var datahora_entrega = new Date(data[i].datahora_entrega)
      var data_entrega = formatDate(datahora_entrega);
      var hora_entrega = formatTime(datahora_entrega);
      console.log(data[i])
      itemToAdd = itemToAdd.replace("<<pedido>>", data[i].codigo_pedido);
      itemToAdd = itemToAdd.replace("<<pedido>>", data[i].codigo_pedido);
      itemToAdd = itemToAdd.replace("<<preco>>", data[i].preco_pedido);
      itemToAdd = itemToAdd.replace("<<dpedido>>", data_pedido);
      itemToAdd = itemToAdd.replace("<<hpedido>>", hora_pedido);
      itemToAdd = itemToAdd.replace("<<dentrega>>", data_entrega);
      itemToAdd = itemToAdd.replace("<<hentrega>>", hora_entrega);
      document.querySelector(".pedidosContainer").innerHTML += itemToAdd;
    }
  }

  this.inflateUnique = function(data){
    var p_id = get_vars['id'];
    changeTitleBar("Pedido #"+ p_id);
    pedido.getOne(p_id, function(data){
      var items = data.itemsMenu;
      for(var i = 0; i < items.length; i++){
        var itemMenu = Pedido.itemMenuList;
        itemMenu = itemMenu.replace('<<item>>', items[i].nome);
        itemMenu = itemMenu.replace('<<qtd>>', items[i].quantidade);
        document.querySelector(".itemsMenuContainer").innerHTML += itemMenu;
      }
      console.log(data);
      var datahora_pedido = new Date(data.datahora_pedido)
      var data_pedido = formatDate(datahora_pedido);
      var hora_pedido = formatTime(datahora_pedido);
      var datahora_entrega = new Date(data.datahora_entrega)
      var data_entrega = formatDate(datahora_entrega);
      var hora_entrega = formatTime(datahora_entrega);
      $('.dentrega .dataToModify').text(data_entrega);
      $('.hentrega .dataToModify').text(hora_entrega);
      $('.dpedido .dataToModify').text(data_pedido);
      $('.hpedido .dataToModify').text(hora_pedido);
      $('.cliente .dataToModify').text(data.nome_cliente);
      $('.preco .dataToModify').text("R$: "+data.preco_pedido);
      $('.notes .dataToModify').text(data.observacoes_pedido);

    })
  }
})();

$(document).ready(function() {
  if(document.querySelector(".pedidosContainer"))
    Pedido.loadPedidos(Pedido.inflatePedido);
  if(document.querySelector(".pedidoContainer"))
    Pedido.loadPedidos(Pedido.inflateUnique)
});
