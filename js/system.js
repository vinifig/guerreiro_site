Array.prototype.containsInArray = function(value){
  for(var i = 0; i < this.length; i++){
    if(this[i] != undefined && value.indexOf(this[i]) != -1)
      return i;
  }
  return -1;
}

// Cache
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

// USERS
var getUser = function(){
  var user = JSON.parse(loadCache('current_user'));
  return user != null ? user : false;
}

var verifyLogin = function(){
  return (getUser() != false);
}

// Permissions
var checkUserLevel = function(){
  var user = getUser();
  var level = "unauth";
  if(user.num_celular != undefined)
    level = "cliente";
  else if(user.cpf_funcionario != undefined)
    level = user.nivel_funcionario == 1 ? "funcionario" : "gerente";

  return level;
}


// Auth [pages, users]
var performLogin = function(user_data){
  saveCache('current_user', user_data);
  return redirectToRootPage();
}

var logout = function(){
  clearCache();
}

var authPages = ['login.php', 'cadastroCliente.php'];
// PARA DEV:
authPages.push(".php");

var userLevelAuthPages = {
  'cliente' : ['modulos/cliente'],
  'funcionario' : ['modulos/funcionario'],
  'gerente' : ['modulos/gerencia']
}

var userLevelRootPages = {
  'cliente' : app_path+"modulos/cliente/cardapio.php",
  'funcionario' : app_path+"modulos/funcionario/index.php",
  'gerente' : app_path+"modulos/gerencia/index.php",
  'unauth' : app_path+"login.php"
}


var is_unauth_page = function(user_level){
  var current_page = location.href.split(app_path)[1];
  var userAuthPages = authPages.concat(userLevelAuthPages[user_level]);
  return (userAuthPages.containsInArray(current_page) == -1)
}

var is_auth_page = function(user_level){
  return !(is_unauth_page(user_level));
}

var checkPermissions = function(){
  if(!verifyLogin() && is_unauth_page(checkUserLevel())){
    return false;
  }
  return true;
}

var redirectToRootPage = function(){
  location.href= userLevelRootPages[checkUserLevel()]
}

var performVerification = function(){
  var current_page = location.href.split(app_path)[1];
  if(getUser() != false && current_page.indexOf('login.php') != -1)
    return redirectToRootPage();
  if(!checkPermissions())
    return redirectToRootPage();
};

performVerification();
