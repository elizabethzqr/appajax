function validar(){
	var xUsuario = document.getElementById("txtUsuario").value;
	if(xUsuario=="" || /^\s$/.test(xUsuario)) {
		alert("Escriba USUARIO...");
		return false;
	}
	
	var xClave = document.getElementById("txtClave").value;
	if(xClave=="" || /^\s$/.test(xClave)) {
		alert("Escriba CONTRASEÑA...");
		return false;
	}

	let xPoliticas = document.getElementsByName("politicas");
	if(!xPoliticas[0].checked) {
		alert("Acepte las POLITICAS...");
		return false;
	}else{
		alert("Usted acepto " + xPoliticas[0].value);
	}

	/// Caso contrario ///
	return true;
}