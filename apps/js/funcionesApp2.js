
function verConteoGenero(genero, mtzAlumnos) {
	//alert(fnValidarApp2());

	contadorGenero = 0;
	if ((0 < mtzAlumnos.length)) {

		mtzAlumnos.forEach(element => {
			if (element[4] == genero) {			//Genero
				contadorGenero++;
			}
		});
		/*		
				//Por que es equivalente		
				for (var i = 0; i < mtzAlumnos.length; i++) {
					mtzGenero = mtzAlumnos[i][3];	//Genero
					if(mtzGenero == genero){
						contadorGenero++;
					}
				}
		*/
	}

	document.getElementById("txtResult").value = contadorGenero;
}

function fnValidarApp2yPasar() {

	var xGenero = document.getElementById("lstGenero").value;
	if (xGenero == "") {
		alert("Seleccione GENERO...");
	} else {
		let xValor = document.getElementById("txtResult").value;
		xValor = "<div id='msj'> <h1> Resultado: "+xValor+" <br><br></h1> </div> ";
		document.getElementById("marco1").innerHTML = xValor;
	}
}