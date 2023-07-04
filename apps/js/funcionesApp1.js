
function verConteoTurno(turno, mtzAlumnos)
{
	contadorTurno = 0;
	if(0 < mtzAlumnos.length){

		for (var i = 0; i < mtzAlumnos.length; i++) {
			mtzTurno = mtzAlumnos[i][3];	//Turno
			if(mtzTurno == turno){
				contadorTurno++;
			}
		}
		
/*
		//Por que es equivalente
		mtzAlumnos.forEach(element => {
			if(element[3]==turno){
				contadorTurno++;
			}
		});
*/
	}
	document.getElementById("txtResult").value = contadorTurno;
}