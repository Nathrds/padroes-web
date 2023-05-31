// função para calcular

function calcular() {
    var num1 = parseFloat(document.getElementById("idNum1").value);
    var num2 = parseFloat(document.getElementById("idNum2").value);
    var resultado = 0;

    if (document.getElementById("idSoma").checked) {
        resultado = num1 + num2;
    } else if (document.getElementById("idSub").checked) {
        resultado = num1 - num2;
    } else if (document.getElementById("idMult").checked) {
        resultado = num1 * num2;
    } else if (document.getElementById("idDiv").checked) {
        resultado = num1 / num2;
    }

    console.log("num1", num1)
    console.log("num2", num2)

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
};
