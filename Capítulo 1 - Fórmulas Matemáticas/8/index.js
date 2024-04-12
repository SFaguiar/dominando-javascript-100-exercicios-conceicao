// Escreva um programa que calcule a equação de segundo grau (ax² + bx + c = 0) utilizando as fórmulas de Bhaskara.
alert("Um programa que calcule a equação de segundo grau (ax² + bx + c = 0) utilizando as fórmulas de Bhaskara.")
let a, b, c, delta, x1, x2, resultado, telaResultado;

a = parseFloat(prompt(`ax² + bx + c = 0/nDigite a:`));
b = parseFloat(prompt(`${a}x² + bx + c = 0/nDigite b:`));
c = parseFloat(prompt(`${a}x² + ${b}x + c = 0/nDigite c:`));

delta = Math.pow(b, 2) - (4*a*c)
x1 = (-b + Math.sqrt(delta))/(2*a)
x2 = (-b - Math.sqrt(delta))/(2*a)

resultado = `As raizes de ${a}x² + ${b}x + ${c} = 0 são ${x1} e ${x2}.`

//Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);



