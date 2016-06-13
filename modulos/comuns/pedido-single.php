<?php
  $title_page = "Pedido #";

  include '../../header.php';
 ?>
  <div class="pedidoContainer">
		<div class="card list itemsMenuContainer">
      <div class="item item-divider">
        Pedido:
		  </div>
		</div>
		<div class="card list dataContainer">
      <div class="item item-divider">
        Detalhes:
		  </div>
			<div class="item dentrega">
				<h2>Data de Entrega</h2>
				<span class="dataToModify"></span>
			</div>
			<div class="item hentrega">
				<h2>Hora de Entrega</h2>
        <span class="dataToModify"></span>
			</div>
			<div class="item dpedido">
				<h2>Data do Pedido</h2>
        <span class="dataToModify"></span>
			</div>
			<div class="item hpedido">
				<h2>Hora do Pedido</h2>
        <span class="dataToModify"></span>
			</div>
			<div class="item cliente">
				<h2>Cliente</h2>
        <span class="dataToModify"></span>
			</div>
			<div class="item preco">
				<h2>Preço</h2>
				<span class="dataToModify"></span>
			</div>
			<div class="item notes">
				<h2>Anotações</h2>
				<span class="dataToModify"></span>
			</div>
		</div>
  </div>
	<?php
  include '../../footer.php';
?>
