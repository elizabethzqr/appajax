<?php
var_dump($_POST); //die("finnnn...");
// Nos llegan los datos por POST 
if ($_POST['nom'] == "rocatic" && $_POST['pass'] == "RocaPass298") {
    // Devolvemos que todo es correcto escribiendo por salida 
    echo "Usuario correcto";
} else {
    // Mensaje si no cumple la validación de usuario y password 
    echo "Usuario no existente";
}
?>