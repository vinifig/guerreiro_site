<?php
  include 'lib/config.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title><?php echo $title_page;?></title>

    <link href="//<?php echo $url_server; ?>css/ionic.min.css" rel="stylesheet">
    <link href="//<?php echo $url_server; ?>css/style.css" rel="stylesheet">

    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
    <link href="css/ionic.app.css" rel="stylesheet">
    -->
    <script language="javascript">
      var app_path = "//<?php echo $url_wo_port_server; ?>";
    </script>
    <script src="//<?php echo $url_server; ?>js/jquery.js" charset="utf-8"></script>
    <script src="//<?php echo $url_server; ?>js/api.js" charset="utf-8"></script>
    <script src="//<?php echo $url_server; ?>js/system.js" charset="utf-8"></script>
    <script src="//<?php echo $url_server; ?>js/main.js" charset="utf-8"></script>
  </head>
  <body >
    <div class="bar bar-header bar-light">
      <h1 class="title"><?php echo $title_page; ?></h1>
    </div>
    <div class="appcontainer scroll">
      <?php if(count(@$menu_items)) :?>
      <nav class="sidemenu">
        <ul class="list">
            <?php foreach($menu_items as $menu_item)
              echo '<a href="'.$menu_item['url'].'"><li class="item">'.$menu_item['nome'].'</li></a>';
            ?>
        </ul>
      </nav>
      <?php endif; ?>
