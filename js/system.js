var saveCache = function(name, value){
  window.localStorage.setItem(name,JSON.stringify(value));
  return value;
}

var loadCache = function(name){
  return window.localStorage.getItem(name);
}

var clearCache = function(){
  window.localStorage.clear();
  return true;
}

var performLogin = function(){
  saveCache('current_user', {"num_celular":"none","nome_cliente":"Pedido fisico","senha":"","email":"","status_cliente":2})
}

var logout = function(){
  clearCache();
}

var getUser = function(){
  var user = JSON.parse(loadCache('current_user'));
  return user != null ? user : false;
}

var verifyLogin = function(){
  return (getUser() != false);
}
