<?php
  $title_page = "Ingredientes";

  include '../../header.php';
 ?>
 	  <div class="card list">
			<label class="item">
				Nome do Ingrediente
				<input type="text" placeholder="seu ingrediente aqui">
			</label>
			<button class="button button-positive">Adicionar Ingrediente</button>
		</div>
		<div class="card list">
			<div class="item">
				<h2>Tomate</h2>
				<button class="button icon ion-close-round"></button>
			</div>
			<div class="item">
				<h2>Ovo</h2>
				<button class="button icon ion-close-round"></button>
			</div>
			<div class="item">
				<h2>Mexirica</h2>
				<button class="button icon ion-close-round"></button>
			</div>
		</div>

	<?php
  include '../../footer.php';
?>
