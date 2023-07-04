function concatenar(){
	var xValor1 = document.getElementById("txtValor1").value;
	var xValor2 = document.getElementById("txtValor2").value;
	asignar(xValor1 + "/" + xValor2);
}

function asignar(xValores){
	document.getElementById("ResultadoDiv").innerHTML = xValores;
	document.getElementById("ResultadoBtn").value = xValores;
	document.getElementById("ResultadoTxt").value = xValores;
}
