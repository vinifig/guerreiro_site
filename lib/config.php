<?php
  function getSitePath(){
    $filePath = str_replace("\\", "/", __FILE__);
    $explodedFile = explode("/", $filePath);
    $serverPath = str_replace("\\", "/", $_SERVER['DOCUMENT_ROOT']);
    $explodedServer = explode("/", $serverPath);
    $finalPath = "";
    $startIndex = $explodedServer[count($explodedServer) - 1] == "" ? count($explodedServer) - 1 : count($explodedServer);
    for($i = $startIndex; $i < count($explodedFile) - 2; $i++){
      $finalPath .= $explodedFile[$i] . '/';
    }
    return $finalPath;
  }



  $url_server = @$_SERVER['SERVER_NAME'].":".@$_SERVER['SERVER_PORT'].'/'.getSitePath();
  $url_wo_port_server = @$_SERVER['SERVER_NAME'].'/'.getSitePath();

?>
