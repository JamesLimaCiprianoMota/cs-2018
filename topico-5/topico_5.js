//Aplicação que recebe alguns parâmetros de entrada, valida a entrada e retorna o numero para um dia da semana (0 para segunda, 1 para terça...)
//1º passo: valida a quantidade de parâmetros de entrada
//2º passo: valida se os mesmos são numéricos e no intervalo válido de valores
//3º passo: faz o cálculo do dia da semana
//4º passo: imprime um número corresponde a um dia da semana


const readline = require('readline');
const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);
const arg3 = Number(process.argv[4]);
const arg4 = Number(process.argv[5]);



var dia_semana = require('./dia_semana.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (arg1, arg2, arg3, arg4) => {
	console.log(dia_semana.dia_semana(arg1, arg2, arg3, arg4));
	rl.close();
});
