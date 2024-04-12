// Crie um programa que calcule e exiba o perímetro de um círculo, solicitando o raio ao usuário.
alert("Um programa calcula e exibe o perímetro de um círculo, solicitando o raio ao usuário.")
let raio, perimetro, resultado, telaResultado;

raio = parseFloat(prompt("Digite o raio do círculo:"));
perimetro = 2*Math.PI*raio;
resultado = `O perímetro do círculo é ${perimetro}.`

//Cola o resultado na tela.
telaResultado = document.createElement("p");
telaResultado.innerText = resultado;
document.querySelector("html").appendChild(telaResultado);



