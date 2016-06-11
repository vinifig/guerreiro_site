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
					<p>Tomate QTDE:
						<input type="text"></input>
					</p>
					<p>Tomate QTDE:
						<input type="text"></input>
					</p>
				 	</div>
				</label>
		 </div>
		 <button class="button button-positive">Salvar</button>
	<?php
  include '../../footer.php';
?>
