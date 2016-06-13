<?php
  $title_page = "Sacola";

  include '../../header.php';
 ?>
    <form class="sacolaContainer">
		 <div class="card list itemsContainer">

     </div>

		 <div class="card list">
			 <div class="item">
				 <h2>Data de Entrega</h2>
				 <input name="dentrega" type="date"></input>
			 </div>
			 <div class="item">
				 <h2>Hora de Entrega</h2>
				 <input name="hentrega" type="time"></input>
			 </div>
			 <div class="item preco">
				 <h2>Preço</h2>
				 <span class="dataToModify"></span>
			 </div>
			 <div class="item">
				 <h2>Anotações</h2>
				 <input type="text" name="notes" placeholder="Suas observações aqui. Caso seja funcionario, o nome do cliente vem aqui"></input>
			 </div>
       <div class="item">
				 <h2>Forma Pagamento</h2>
				 <select name="pagamento">
         <option value="1">Debito</option>
         <option value="2">Dinheiro</option>
         <option value="3">Crédito</option>
         </select>
			 </div>
		 	</div>
			<input type="submit" class="button button-positive" value="Finalizar Pedido">
    </form>

  <?php

  include '../../footer.php';
?>
