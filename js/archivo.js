function calcularMasa(){
var peso = document.getElementById('peso').value;
var talla = document.getElementById('talla').value;
	return alert("Indice Masa Corporal: "+(peso/Math.pow(talla,2)).toFixed(2));
}