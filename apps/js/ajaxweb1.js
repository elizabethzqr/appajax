////////////////////////////////////////////////////////////////////////////
// Link a jQuery - Va en pagina que anidada a todos los apps que usan jquey
////////////////////////////////////////////////////////////////////////////
//<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

////////////////////////////////////////////////////////////////////////////
// La función, ENVIA DATOS y RECIBE RESULTADO en el id de un elemento HTML
////////////////////////////////////////////////////////////////////////////
//variables: variables que posiblemente requiera el procesador
//etiqueta: etiqueta en la que recibira la respuesta
//id: id de la etiqueta donde recibira la respuesta
//procesador: archivo a dar lectura (txt, php, css, etc.)
function ver2(variables,etiqueta,id,procesador){
		
	let metodo = metodoEnvio(procesador);	
	//alert("variables="+variables+"/etiqueta="+etiqueta+"/id="+id+"/procesador="+procesador+"/metodo="+metodo);

	///////////////////////////////////////////////////////////////////////
	////// La condición, CREA e ENVIA DATOS al URL a través de objeto /////
	///////////////////////////////////////////////////////////////////////
	if(metodo != ""){ 
		
		let host="localhost";								//host
		let directorio="clones/aw3";						//directorio o repositorio
		var xHTTP = (host=='localhost')? 'http://': 'https://';	
		url=xHTTP+host+"/"+directorio+"/"+procesador;		//alert(url);		//con http o https
		
		var losDatos = crearCadena(variables);				//alert(losDatos);	//1 msj-valor minimo
		//alert(losDatos);
		//objXHR.onreadystatechange=procesaRespuesta;		//En change ejecuta fn procesaRespuesta
		//objXHR.open(metodo,url,true);						//
		//objXHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//objXHR.send(losDatos);
		
		//pnom = $('#nom').val(); 					// Obteniendo del form el valor nom
		//ppass = $('#pass').val();					// Obteniendo del form el valor pass
		//alert("pnom="+pnom+"/ ppass="+ppass);
		$.ajax({
			type: metodo,          					// POST o GET depende de procesador
			url: './'+procesador,   				// Procesador tipo html o php
			//data: { nom: pnom, pass: ppass }  	// Datos que se envían
			//data: { nom: "pnom", pass: "ppass" }  	// Datos que se envían
			data: losDatos							// Datos que se envían
		}).done(function (msg) {					// Función que se ejecuta si todo ha ido bien
			if (etiqueta=='input') {
				//$("#"+id).value = msg;			// FALTA. Resultado en el id de tipo value (input)	
			} else {
				$("#"+id).html(msg);				// Resultado en el id de tipo innerHTML (div, td, etc)
			}
		}).fail(function (jqXHR, textStatus, errorThrown) { // Función que se ejecuta si algo ha ido mal
			if (etiqueta == 'input') {
				//$("#"+id).value = "ERROR: " + textStatus + " " + errorThrown;		//FALTA	
			} else {
				$("#"+id).html("ERROR: " + textStatus + " " + errorThrown);			//bien	
			}
		});		
	}
}

///////////////////////////////////////////////////////////////////////
///////// La función, forma una cadena con "VARIABLE=VALOR" ///////////
///////////////////////////////////////////////////////////////////////
function crearCadena(xVariables) {
	var cadena='';
	if(xVariables=='') {		//Para reportes SIN ENVIO de variables
		cadena = "nocache="+Math.random();
	}else {						//Para reportes CON ENVIO de variables

		var xArray = xVariables.split('-');	//Convierte a array por "-"
		for(i=0; i<xArray.length; i++)	{	//Forma cadena por bucle
			xVar  = xArray[i]; 				//NOMBRE de variable. Ej. "txtNombre"
											//VALOR de variable. Ej. "Juan"
			valor = document.getElementById(xArray[i]).value;
			dato = xVar+"="+valor+"&";		//Forma cadena
			cadena = cadena + dato;			//Concatena con anterior
		}
		cadena=cadena+"nocache="+Math.random();		//Cadena final
	}
	//alert(cadena);
	return cadena;				//Devuelve la cadena
}

const metodoEnvio = (procesador) => {
	let metodo = "";
	var extension = (procesador.toLowerCase()).slice(-4);
	switch (extension) {
		case ".php": metodo = "POST";  return metodo;
		case "html": metodo = "GET";   return metodo;
		case 	 "": metodo = "VACIO"; return metodo;
		default:     metodo = "ERROR"; return metodo;
	}
}