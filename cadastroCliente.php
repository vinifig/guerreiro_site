<?php
  $title_page = "Cadastrar Cliente";
  // $menu_items = [
  //   ["nome" => "oi", "url" => "#1"],
  //   ["nome" => "cueio", "url" => "#2"],
  // ];
  include 'header.php';
 ?>
 	  <div id="inputFields" class="list">
			<label class="item">
				Nome
				<input type="text" placeholder="Joao Ferreira Silva">
			</label>
			<label class="item">
				Celular
				<input type="text" placeholder="ex: 14987740055">
			</label>
			<label class="item">
				Email
				<input type="text" placeholder="joaoferreira@hotmail.com">
			</label>
			<label class="item">
				Senha
				<input type="password" placeholder="sua senha aqui">
			</label>
		</div>
		<button class="button button-positive">Cadastrar</button>

<?php
  include 'footer.php';
?>
