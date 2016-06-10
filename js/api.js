var urlBase = "http://api.vinifig.me/guerreiro/"
var performCall = function(url, verb, extras){
  if(verb == undefined)
    verb = "GET";
  var config = {
    method: verb,
    url: url
  };
  if(verb != "GET")
    config.data = extras;
  return $.ajax(config);
}

var cliente = new (function(){
  var urlCliente = urlBase + "cliente";
  this.getAll = function(callback){
    performCall(urlCliente, "GET").done(callback)
  }
  this.getOne = function(data, callback){
    performCall(urlCliente+"/"+data.celular, "GET").done(function(data){
      data = (data.length != 0) ? data[0] : false;
      callback(data);
    })
  }
  this.auth = function(data, callback){
    performCall(urlCliente+"/auth", "POST", data).done(function(data){
      callback(data);
    })
  }
  this.add = function(data, callback){
    performCall(urlCliente, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.remove = function(data, callback){
    performCall(urlCliente, "DELETE", data).done(function(data){
      callback(data);
    })
  }
  this.permiteCliente = function(data, callback){
    performCall(urlCliente+"/autoriza", "PUT", data).done(function(data){
      callback(data);
    })
  }

})();

var funcionario = new (function(){
  var urlFuncionario = urlBase + "funcionario";
  var urlGerente = urlBase + "gerente";
  this.getAll = function(callback){
    performCall(urlFuncionario, "GET").done(callback)
  }
  this.getOne = function(data, callback){
    performCall(urlFuncionario+"/"+data.cpf, "GET").done(function(data){
      callback(data);
    })
  }
  this.auth = function(data, callback){
    performCall(urlFuncionario+"/auth", "POST", data).done(function(data){
      callback(data);
    })
  }
  this.addFuncionario = function(data, callback){
    performCall(urlFuncionario, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.addGerente = function(data, callback){
    performCall(urlGerente, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.remove = function(data, callback){
    performCall(urlFuncionario, "DELETE", data).done(function(data){
      callback(data);
    })
  }
})();

var ingrediente = new (function(){
  var urlIngrediente = urlBase + "ingrediente";

  this.getAll = function(callback){
    performCall(urlIngrediente, "GET").done(callback)
  }
  this.getOne = function(data, callback){
    performCall(urlIngrediente+"/"+data.codigo, "GET").done(function(data){
      data = (data.length != 0) ? data[0] : false;
      callback(data);
    })
  }
  this.addIngrediente = function(data, callback){
    performCall(urlIngrediente, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.remove = function(data, callback){
    performCall(urlIngrediente, "DELETE", data).done(function(data){
      callback(data);
    })
  }
})();

var cardapio = new (function(){
  var urlItemMenu = urlBase + "itemmenu";
  var urlIngredienteMenu = urlBase + "ingredientemenu";

  this.getAll = function(callback){
    performCall(urlItemMenu, "GET").done(callback)
  }
  this.getOne = function(data, callback){
    performCall(urlItemMenu+"/"+data.codigo, "GET").done(function(data){
      data = (data.length != 0) ? data[0] : false;
      callback(data);
    })
  }
  this.addItemMenu = function(data, callback){
    performCall(urlItemMenu, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.addIngredienteMenu = function(data, callback){
    performCall(urlIngredienteMenu+'/add', "PUT", data).done(function(data){
      callback(data);
    })
  }
  this.removeIngredienteMenu = function(data, callback){
    performCall(urlIngredienteMenu+'/remove', "PUT", data).done(function(data){
      callback(data);
    })
  }
  this.remove = function(data, callback){
    performCall(urlItemMenu, "DELETE", data).done(function(data){
      callback(data);
    })
  }
})();

var pedido = new (function(){
  var urlPedido = urlBase + "pedido";
  var urlPedidoItem = urlBase + "pedidoitem";

  this.getAll = function(callback){
    performCall(urlPedido, "GET").done(callback)
  }
  this.getOne = function(data, callback){
    performCall(urlPedido+"/"+data.codigo, "GET").done(function(data){
      data = (data.length != 0) ? data[0] : false;
      callback(data);
    })
  }
  this.createPedido = function(data, callback){
    performCall(urlPedido, "POST", data).done(function(data){
      callback(data);
    })
  }

  this.addPedidoItem = function(data, callback){
    performCall(urlPedidoItem+'/add', "PUT", data).done(function(data){
      callback(data);
    })
  }
  this.removePedidoItem = function(data, callback){
    performCall(urlPedidoItem+'/remove', "PUT", data).done(function(data){
      callback(data);
    })
  }
  this.updatePedidoItem = function(data, callback){
    performCall(urlPedidoItem+'/update', "PUT", data).done(function(data){
      callback(data);
    })
  }
  this.confirmaPedido = function(data, callback){
    performCall(urlPedido+'/confirma', "PUT", data).done(function(data){
      callback(data);
    })
  }
  this.entregaPedido = function(data, callback){
    performCall(urlPedido+'/entrega', "PUT", data).done(function(data){
      callback(data);
    })
  }
})();
