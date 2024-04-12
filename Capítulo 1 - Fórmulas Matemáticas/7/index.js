// Escreva um programa que calcule a área de um círculo a partir do raio, utilizando a fórmula A = πr².
alert("Um programa que calcula a área de um círculo a partir do raio, utilizando a fórmula A = πr²");
let raio, area, resultado, telaResultado;

raio = parseFloat(prompt("Digite o raio do círculo"));
area = Math.PI * Math.pow(raio, 2);
resultado = `A área do círculo é ${(area)}`

//Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);



