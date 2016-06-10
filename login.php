<?php
  $title_page = "Login";
  // $menu_items = [
  //   ["nome" => "oi", "url" => "#1"],
  //   ["nome" => "cueio", "url" => "#2"],
  // ];
  include 'header.php';
 ?>
  <form id="loginForm">
 	 <div id="loginRadioChoice">
		 <input type="radio" checked name="tipoLogin" value="cliente">Cliente</input>
		 <input type="radio" name="tipoLogin" value"funcionario">Funcionario</input>
	 </div>
	 <div class="list">
	   <label class="item item-input item-floating-label">
	   <input name="login" type="text" placeholder="login">
	   </label>
	   <label class="item item-input item-floating-label">
	     <input name="senha" type="password" placeholder="Senha">
	   </label>
	   <input type="submit" class="button button-positive" value="Login">
	   <a href="//<?php echo $url_server; ?>cadastroCliente.php" class="button button-positive">Sign up</a>
	 </div>
 </form>

<?php
  include 'footer.php';
?>
