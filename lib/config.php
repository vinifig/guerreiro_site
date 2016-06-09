<?php
  function getSitePath(){
    $filePath = str_replace("\\", "/", __FILE__);
    $explodedFile = explode("/", $filePath);
    $serverPath = str_replace("\\", "/", $_SERVER['DOCUMENT_ROOT']);
    $explodedServer = explode("/", $serverPath);
    $finalPath = "";
    for($i = count($explodedServer) - 1; $i < count($explodedFile) - 2; $i++){
      $finalPath .= $explodedFile[$i] . '/';
    }
    return $finalPath;
  }



  $url_server = @$_SERVER['SERVER_NAME'].":".@$_SERVER['SERVER_PORT'].'/'.getSitePath();

?>
