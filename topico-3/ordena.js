// Função que recebe os caracteres e os ordena

remove_espacos = require("./remove_espacos");

var ordena = (texto) => {
	let texto_sem_espaco = remove_espacos.remove_espacos(texto);
	return texto_sem_espaco.split('').sort().join('')
}

exports.ordena = ordena;
