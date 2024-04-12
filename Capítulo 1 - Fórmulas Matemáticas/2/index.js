// Escreva um programa que calcule a média aritmética entre dois números
alert("Um programa que calcula a média aritmética entre dois números.")
let num1, num2, media, resultado, telaResultado;

num1 = parseFloat(prompt("Digite o primeiro número"));
num2 = parseFloat(prompt("Digite o segundo número"));
media = (num1 + num2)/2
resultado = `A média entre ${num1} e ${num2} é ${(media)}`

//Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);

