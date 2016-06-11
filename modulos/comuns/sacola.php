<?php
  $title_page = "Sacola";

  include '../../header.php';
 ?>
		 <div class="card list">
			 <div class="item item-thumbnail-left">
				 <img src="//<?php echo $url_server; ?>img/hamburger.png">
				 <h2>Hamburger</h2>
				 <div class="btn-item">
					 <button class="button-left button icon ion-minus button-dark"></button>
					 <input type="text" value="0">
					 <button class="button-right button icon ion-plus button-dark"></button>
				 </div>
			 </div><div class="item item-thumbnail-left">
				 <img src="//<?php echo $url_server; ?>img/hamburger.png">
				 <h2>Hamburger</h2>
				 <div class="btn-item">
					 <button class="button-left button icon ion-minus button-dark"></button>
					 <input type="text" value="0">
					 <button class="button-right button icon ion-plus button-dark"></button>
				 </div>
			 </div><div class="item item-thumbnail-left">
				 <img src="//<?php echo $url_server; ?>img/hamburger.png">
				 <h2>Hamburger</h2>
				 <div class="btn-item">
					 <button class="button-left button icon ion-minus button-dark"></button>
					 <input type="text" value="0">
					 <button class="button-right button icon ion-plus button-dark"></button>
				 </div>
			 </div>
		 </div>

		 <div class="card list">
			 <div class="item">
				 <h2>Data de Entrega</h2>
				 <input type="date"></input>
			 </div>
			 <div class="item">
				 <h2>Hora de Entrega</h2>
				 <input type="time"></input>
			 </div>
			 <div class="item">
				 <h2>Cliente</h2>
				 <input type="text" placeholder="nome do cliente"></input>
			 </div>
			 <div class="item">
				 <h2>Preço</h2>
				 R$ 69,60
			 </div>
			 <div class="item">
				 <h2>Anotações</h2>
				 <input type="text" placeholder="suas observações aqui"></input>
				 <in
			 </div>
		 	</div>
			<button class="button button-positive">Finalizar Pedido</button>

  <?php

  include '../../footer.php';
?>
