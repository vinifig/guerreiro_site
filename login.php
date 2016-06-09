<?php
  $title_page = "Login";
  // $menu_items = [
  //   ["nome" => "oi", "url" => "#1"],
  //   ["nome" => "cueio", "url" => "#2"],
  // ];
  include 'header.php';
 ?>
 	 <div id="loginRadioChoice">
		 <input type="radio" checked name="tipoLogin" value="cliente">Cliente</input>
		 <input type="radio" name="tipoLogin" value"funcionario">Funcionario</input>
	 </div>
	 <div class="list">
	   <label class="item item-input item-floating-label">
	   <input type="text" placeholder="Telefone">
	   </label>
	   <label class="item item-input item-floating-label">
	     <input type="password" placeholder="Senha">
	   </label>
	   <a class="button button-positive">Login</a>
	   <a class="button button-positive">Sign up</a>
	 </div>
<?php
  include 'footer.php';
?>
