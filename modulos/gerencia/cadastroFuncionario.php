<?php
  $title_page = "Cadastrar Funcionário";
  // $menu_items = [
  //   ["nome" => "oi", "url" => "#1"],
  //   ["nome" => "cueio", "url" => "#2"],
  // ];
  include '../../header.php';
 ?>
 	  <div class="list">
			<label class="item">
				Nome
				<input type="text" placeholder="Joao Ferreira Silva">
			</label>
			<label class="item">
				CPF
				<input type="text" placeholder="ex: 12345678910">
			</label>
			<label class="item">
				Senha
				<input type="password" placeholder="sua senha aqui">
			</label>
		</div>
		<button class="button button-positive">Cadastrar</button>

<?php
  include '../../footer.php';
?>
