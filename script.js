function calcular() {
    var num1 = document.getElementsByClassName("va1").value;
    var num2 = document.getElementsByClassName("va2").value;

    var soma = num1 + num2;
    var sub = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;

    document.getElementById("soma").innerHTML = soma
}