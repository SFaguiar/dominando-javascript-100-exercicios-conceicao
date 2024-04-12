// Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles.
alert("Um programa que solicita ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles.")
let num1, num2, resultado, telaResultado;

num1 = parseFloat(prompt("Digite o primeiro número"));
num2 = parseFloat(prompt("Digite o segundo número"));

resultado = `Soma: ${(num1 + num2)}
Subtração: ${(num1 - num2)}
Multiplicação: ${(num1 * num2)}
Divisão: ${(num1 / num2)}`;

telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);

