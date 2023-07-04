function verTablaDatos(turnoElegido, generoElegido, mtzAlumnos)
{ 
	let tabla="";
	let contador = 0;
	let nom, ape, gen, tur;
	if (validarApp1()) {
		if(mtzAlumnos.length > 0){
			for (var i = 0; i < mtzAlumnos.length; i++) {
				turnoMtz  = mtzAlumnos[i][3];		//letra Turno
				generoMtz = mtzAlumnos[i][4];		//letra Genero
				if(turnoMtz == turnoElegido && generoMtz == generoElegido){
	
					cod = mtzAlumnos[i][0];			//Código
					nom = mtzAlumnos[i][1];			//Nombres
					ape = mtzAlumnos[i][2];			//Apellidos
					tur = fnTurno(turnoMtz);		//Turno
					gen = fnGenero(generoMtz);		//Genero
	
					tabla += `
					<table border='1'>
						<tr>
							<th colspan='3' class='subTitulo'> ${contador + 1} Datos personales </th>
						</tr>
						<tr>
							<td id='tdIzq'>Nombres</td>
							<td id='tdDer'>${nom}</td>
							<td rowspan='4'><img src='apps/img/${cod}.jpg'></td>
						</tr>
						<tr>
							<td id='tdIzq'>Apellidos</td>
							<td id='tdDer'>${ape}</td>
						</tr>
						<tr>
							<td id='tdIzq'>Género</td>
							<td id='tdDer'>${gen}</td>
						</tr>
						<tr>
							<td id='tdIzq'>Turno</td>
							<td id='tdDer'>${tur}</td>
						</tr>
					</table>
					<br>
					`;
					contador++;
				}
			}
		}
		tabla = `<div id='msj'> ${contador} Registros encontrados </div> ` + tabla;
		document.getElementById("marco").innerHTML = tabla;	
	}
}

function fnGenero(xGenero){
	if(xGenero=="M"){
		return "Masculino";
	} else if(xGenero == "F"){
		return "Femenino"
	}
}

function fnTurno(turno){
	switch (turno) {
		case 'M': return "Día"; break;
		case 'N': return "Noche"; break;
		case 'T': return "Tarde"; break;
		default: return "No definido"; break;
	}
}

function borrarMarco(){
	document.getElementById("marco").innerHTML = "Resutado borrado..."
}

function validarApp1() {
	var xTurno = document.getElementById("lstTurno").value;
	if(xTurno=="" || /^\s$/.test(xTurno)) {
		alert("Seleccione TURNO...");
		return false;
	}
	
	var xGenero = document.getElementById("lstGenero").value;
	if(xGenero=="" || /^\s$/.test(xGenero)) {
		alert("Seleccione GÉNERO...");
		return false;
	}

	//Caso contrario
	return true;
}