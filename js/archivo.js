function calcularMasa(){
	var peso = parseFloat(document.getElementById("peso").value);
	var estatura = parseFloat(document.getElementById("estatura").value);
	calculo = peso / (estatura * estatura);
	alert(calculo.toFixed(2));
}