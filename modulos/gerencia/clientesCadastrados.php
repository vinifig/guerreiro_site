<?php
  $title_page = " Cadastro de Clientes";

  include '../../header.php';
 ?>
 <div class="item-input-inset">
  <label class="item-input-wrapper">
    <i class="icon ion-ios-search placeholder-icon"></i>
    <input type="search" placeholder="Pesquisar Cliente">
  </label>
  <button class="button">
    Cancel
  </button>
</div>

 	  <div class="card">
			<div class="list item-divider">
				<h4>Pendentes</h4>
				<div class="item">
					<h2>Ana Clara Braga da Motta</h2>
					<p>Pendente</p>
					<p>14988001133</p>
					<button class="button icon ion-checkmark-round"></button>
					<button class="button icon  ion-close-round"></button>
				</div>
				</div>
		</div>
		<div class="card">
			<div class="list item-divider">
				<h4>Aprovados</h4>
				<div class="item">
					<h2>Vinicius Figueiredo</h2>
					<p>Aprovado</p>
					<p>14988001133</p>
					<button class="button icon  ion-close-round"></button>
				</div>
				</div>
		</div>

	<?php
  include '../../footer.php';
?>
