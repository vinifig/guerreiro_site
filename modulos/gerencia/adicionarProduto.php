<?php
  $title_page = "Produto";

  include '../../header.php';
 ?>

		 <div class="card list">
			 <label class="item">
	 		   Título do Produto
	 		   <input type="text" placeholder="ex: Hamburger">
	 			</label>
		 		<label class="item">
		 			Descrição
		 			<input type="text" placeholder="ex: Delicioso sanduíche.">
		 		</label>
 				<label class="item">
 					Preço
 					<input type="text" placeholder="ex: 69.90">
 				</label>
				<label class="item">
					Ingredientes
					<p>
						Ovo
						<button class="button icon  ion-close-round"></button>
					</p>
					<p>
						Tomate
						<button class="button icon  ion-close-round"></button>
					</p>
					<div class="item-input-inset">
				   <label class="item-input-wrapper">
				     <i class="icon ion-ios-search placeholder-icon"></i>
				     <input type="search" placeholder="Pesquisar Ingrediente">
				   </label>
				   <button class="button">
				     Cancel
				   </button>
				 	</div>
				</label>
		 </div>
		 <button class="button button-positive">Salvar</button>
	<?php
  include '../../footer.php';
?>
