// Escreva um programa que calcule a média geométrica entre três números informados pelo usuário.

let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite o segundo número"));
let num3 = parseFloat(prompt("Digite o segundo número"));
let media = Math.pow((num1 * num2 * num3), 1/3);
let resultado = `A média geométrica entre ${num1}, ${num2} e ${num3} é ${(media)}`

//Cola o resultado na tela.
let telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);



