// DEFAULT FUNCTIONS
var changeTitleBar = function(title){
  if(title)
    $("h1.title, title").text(title);
}

// LOGIN

var loginSubmitCallback = function(e){
  var loginInfo = $(this).serializeArray();

  var loginCallback = function(data){
    if(data.result != undefined && data.result == true){
      if(loginInfo[0].value == "cliente"){
        cliente.getOne({celular : loginInfo[1].value},performLogin)
      }else {
        funcionario.getOne({cpf : loginInfo[1].value},performLogin)
      }
    }
  }

  if(loginInfo[0].value == "cliente"){
    cliente.auth({
      celular : loginInfo[1].value,
      senha : loginInfo[2].value
    }, loginCallback)
  }else{
    funcionario.auth({
      cpf : loginInfo[1].value,
      senha : loginInfo[2].value
    }, loginCallback)
  }
  e.preventDefault();
}

var sairCallback = function(e){
  logout();
  redirectToRootPage();
  e.preventDefault();
}

var gotoSacola = function(){
  location.href="sacola.php";
}

var formatTime = function(date){
  console.log(date);
  var data = date.toString().split(" ");
  return data[4];
}

var formatDate = function(date){
  var data = date.toString().split(" ");
  return data[2]+"/"+date.getMonth()+"/"+data[3];
}

$(document).ready(function() {
  $("#loginForm").on("submit", loginSubmitCallback)
  $(".Sair_bt").on("click", sairCallback);
  $(".sacola_bt").on("click", gotoSacola);
});
