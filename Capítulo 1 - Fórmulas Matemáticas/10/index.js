// Escreva um programa que calcule o perímetro e a área de um triângulo, utilizando as fórmulas P = a + b + c e A = (b * h) / 2, onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b.
alert("Um programa que calcula o perímetro e a área de um triângulo, utilizando as fórmulas P = a + b + c e A = (b * h) / 2, onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b.")
let a, b, c, area, perimetro, semiperimetro, resultado, telaResultado;

a = parseFloat(prompt("Digite o lado a:"));
b = parseFloat(prompt("Digite o lado b:"));
c = parseFloat(prompt("Digite o lado c:"));
perimetro = a + b + c;
semiperimetro = perimetro/2;
area = Math.sqrt((semiperimetro*(semiperimetro - a)*(semiperimetro - b)*(semiperimetro - c)));


resultado = `O perímetro e a área de um triângulo de lados ${a}, ${b} e ${c} são, respectivamente, ${perimetro} e ${area}.`

//Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);
