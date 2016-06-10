// DEFAULT FUNCTIONS
var changeTitleBar = function(title){
  if(title)
  $("#title_bar").text(title);
}

// LOGIN

var loginSubmitCallback = function(e){
  var loginInfo = $(this).serializeArray();

  var loginCallback = function(data){
    console.log(data)
  }

  if(loginInfo[0].value == "cliente"){
    cliente.auth({
      num_celular : loginInfo[1].value,
      senha : loginInfo[2].value
    }, loginCallback)
  }else{
    funcionario.auth({
      cpf_funcionario : loginInfo[1].value,
      senha : loginInfo[2].value
    }, loginCallback)
  }
  e.preventDefault();
}

$(document).ready(function() {
  $("#loginForm").on("submit", loginSubmitCallback)
});
