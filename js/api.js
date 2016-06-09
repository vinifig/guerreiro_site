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
      data = (data.length != 0) ? data[0] : false;
      callback(data);
    })
  }
  this.auth = function(urlFuncionario, callback){
    performCall(urlFuncionario+"/auth", "POST", data).done(function(data){
      callback(data);
    })
  }
  this.addFuncionario = function(urlFuncionario, callback){
    performCall(urlFuncionario, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.addGerente = function(urlFuncionario, callback){
    performCall(urlGerente, "POST", data).done(function(data){
      callback(data);
    })
  }
  this.remove = function(urlFuncionario, callback){
    performCall(urlFuncionario, "DELETE", data).done(function(data){
      callback(data);
    })
  }
})();

var ingrediente = new (function(){

})();

var cardapio = new (function(){

})();

var pedido = new (function(){

})();
