<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title></title>

    <link href="//localhost/guerreiro_site/css/ionic.min.css" rel="stylesheet">
    <link href="//localhost/guerreiro_site/css/style.css" rel="stylesheet">

    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
    <link href="css/ionic.app.css" rel="stylesheet">
    -->
    <script src="//localhost/guerreiro_site/js/jquery.js" charset="utf-8"></script>
    <script src="//localhost/guerreiro_site/js/api.js" charset="utf-8"></script>
    <script src="//localhost/guerreiro_site/js/system.js" charset="utf-8"></script>
    <script src="//localhost/guerreiro_site/js/main.js" charset="utf-8"></script>
  </head>
  <body >
    <div class="bar bar-header bar-light">
      <h1 class="title"><?php echo $title_page; ?></h1>
    </div>
    <div class="appcontainer">
      <?php if(count(@$menu_items)) :?>
      <nav class="sidemenu">
        <ul class="list">
            <?php foreach($menu_items as $menu_item)
              echo '<a href="'.$menu_item['url'].'"><li class="item">'.$menu_item['nome'].'</li></a>';
            ?>
        </ul>
      </nav>
      <?php endif; ?>
