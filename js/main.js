var saveCache = function(name, value){
  window.localStorage.setItem(name,value);
  return value;
}

var loadCache = function(name){
  return window.localStorage.getItem(name);
}

var clearCache = function(){
  window.localStorage.clear();
  return true;
}

var changeTitleBar = function(title){
  if(title)
    $("#title_bar").text(title);
}

var verifyLogin = function(){
  
}
