//Aplicação que recebe uma string de caracteres.
//Será identificado se são 2 inteiros, e em seguida, retornado o resto da divisão

const readline = require('readline');

var Resto_Divisao = require('./resto_divisao.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (texto) => {
	console.log(Resto_Divisao.resto_divisao_inteira(texto));
	rl.close();
});

