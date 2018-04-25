//Aplicação que recebe uma sitring de caracteres com espaço e imprime uma string com os caracteres 
//ordenados sem os espacos.
//1º passo: receber a string com os caracteres
//2º passo: remover todos os espaços
//3º passo: separar os caracteres para poder compará-los
//4º passo: realizar a ordenação dos mesmos
//5º passo: imprimir e exibir a string ordenada
const readline = require('readline');

var ordena = require('./ordena.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (texto) => {
	console.log(ordena.ordena(texto));
	rl.close();
});

//var entrada_usuario = "Caraio";
//


