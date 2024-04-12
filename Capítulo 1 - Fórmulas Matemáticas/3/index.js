// Escreva um programa que calcule a média aritmética entre três números
alert("Um programa que calcula a média aritmética entre três números.")
let num1, num2, num3, media, resultado, telaResultado;

num1 = parseFloat(prompt("Digite o primeiro número"));
num2 = parseFloat(prompt("Digite o segundo número"));
num3 = parseFloat(prompt("Digite o segundo número"));
media = (num1 + num2 + num3)/3
resultado = `A média entre ${num1}, ${num2} e ${num3} é ${(media)}`

//Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);