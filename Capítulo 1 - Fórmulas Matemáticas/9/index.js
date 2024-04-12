// Escreva um programa que calcule o perímetro e a área de um retângulo, utilizando as fórmulas P = 2(l + c) e A = lc, onde l é a largura e c é o comprimento.
alert("Um programa que calcula o perímetro e a área de um retângulo, utilizando as fórmulas P = 2(l + c) e A = lc, onde l é a largura e c é o comprimento.")
let largura, comprimento, perimetro, area, resultado, telaResultado;

largura = parseFloat(prompt("Digite a largura do retângulo"));
comprimento = parseFloat(prompt("Digite a comprimento do retângulo"));
perimetro = 2*(largura + comprimento);
area = largura * comprimento

resultado = `A área de um retângulo ${comprimento} por ${largura} é ${area}, e seu perimetro, ${perimetro}.`

// Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);
