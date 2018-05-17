//Função que calcula o dia da semana

//Recupera a classe Valida_Entrada do módulo correspondente.
const Valida_Entrada = require('../valida_entrada');

//Cria uma instância utilizada pelos testes
const valida_entrada = new Valida_Entrada();

var dia_semana = (arg1, arg2, arg3, arg4) => {
	let entrada_valida = valida_entrada(arg1, arg2, arg3, arg4);
	return entrada_valida;
}

exports.dia_semana = dia_semana;

