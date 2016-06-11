var Pedido = new (function(){
  this.itemList = `<a class="item item-thumbnail-left" href="pedido.php?id=<<pedido>>">
    <img src="${app_path}img/conta.png">
    <h2>#<<pedido>></h2>
    <p>Data Entrega: <<dentrega>> Hora Entrega: <<hentrega>> PREÇO: R$ <<preco>> Data Pedido: <<dpedido>> Hora Pedido: <<hpedido>></p>
  </a>`;
  this.loadPedidos = function(callback){
    pedido.getByUser(getUser().num_celular,function(data){
      for(var i = 0; i < data.length; i++){
        if(data[i].status == 1)
          delete data[i];
      }
      callback(data);
    });
  }

  this.inflate = function(data){
    for(var i = 0; i < data.length; i++){
      var itemToAdd = Pedido.itemList;
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
    changeTitleBar("Pedido #"+get_vars['id']);
  }
})();

$(document).ready(function() {
  if(document.querySelector(".pedidosContainer"))
    Pedido.loadPedidos(Pedido.inflate);
  if(document.querySelector(".pedidoContainer"))
    Pedido.loadPedidos(Pedido.inflateUnique)
});
