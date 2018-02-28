<?php
	if($_SERVER['REQUEST_METHOD']=='GET') {
		$z1 = $_GET['z1'];
		$z2 = $_GET['z2'];
		$r_art = $_GET['rArt'];
		
		switch($r_art) {
			case 'add':
			echo $z1 + $z2;
			break;
			
			case 'min':
			echo $z1 - $z2;
			break;
			
			case 'mal':
			echo $z1 * $z2;
			break;
			
			case 'div':
			echo $z1 / $z2;
			break;
			
			default:
				echo 'Fehler';
			break;
		}
	}
?>