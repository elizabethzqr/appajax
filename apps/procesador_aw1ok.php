<?php
	var_dump($_POST);
	$db = new PDO('mysql:host=localhost;dbname=prueba', 'root', '');
/*
	//PRIMERA FORMA
	if(isset($_POST["valor"])){
		$xApe = $_POST["apellido"];
		$xNom = $_POST["nombre"];
		$xEda = 20;
		$upSent = $db->prepare("INSERT INTO `clientes` (`ideCli`, `nomcli`, `apecli`, `edacli`) VALUES (NULL, :nomcli, :apecli, :edacli);");
		$upSent->bindParam(':nomcli', $xNom, PDO::PARAM_STR);
		$upSent->bindParam(':apecli', $xApe, PDO::PARAM_STR);
		$upSent->bindParam(':edacli', $xEda, PDO::PARAM_INT);
		$upSent->execute();
		if ($upSent->rowCount() > 0){
			echo 1;
		}else{
			echo 0;
		}
	}

	//SEGUNDA FORMA
	if(isset($_POST["valor"])){
		$datos = [
			'nomcli' => $_POST["nombre"],
			'apecli' => $_POST["apellido"],
			'edacli' => 20,
		];
		$sql = "INSERT INTO `clientes` (`ideCli`, `nomcli`, `apecli`, `edacli`) VALUES (NULL,:nomcli,:apecli,:edacli)";
		//$sql = "INSERT INTO `clientes` (`ideCli`, `nomcli`, `apecli`, `edacli`) VALUES (?,?,?,?)";
		$upSent = $db->prepare($sql);
		$upSent->execute($datos);
		if ($upSent->rowCount() > 0){
			echo 1;
		}else{
			echo 0;
		}
	}
*/
	//TERCERA FORMA
	if(isset($_POST["valor"])){
		$datos = array(NULL, $_POST["nombre"], $_POST["apellido"], 20);
		$sql = "INSERT INTO `clientes` (`ideCli`, `nomcli`, `apecli`, `edacli`) VALUES (?,?,?,?)";
		$upSent = $db->prepare($sql);
		$upSent->execute($datos);
		if ($upSent->rowCount() > 0){
			echo 1;
		}else{
			echo 0;
		}
	}

?>