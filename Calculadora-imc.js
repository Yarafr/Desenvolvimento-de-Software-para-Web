const peso = "84.6";
const altura = "1.53";
const imc = peso / (altura * altura);

let estado = "";

if (imc < 18.5) {
    estado = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    estado = "Normal";
} else if (imc >= 25 && imc <= 29.9) {
    estado = "Sobrepeso";
} else {
    estado = "Obesidade";
}

console.log("Seu IMC é de: " + imc.toFixed(2) + " - " + estado);
