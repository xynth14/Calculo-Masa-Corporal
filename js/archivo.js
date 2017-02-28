function calcularMasa(){

	var peso = parseFloat(document.getElementById("peso").value);
	var estatura = parseFloat(document.getElementById("talla").value);
if(!isNaN(peso) && !isNaN(estatura)){
	calculo = peso / (estatura * estatura);
	alert("Indice Masa Corporal: "+calculo.toFixed(2));

}

	
}