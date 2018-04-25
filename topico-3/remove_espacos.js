// Função que recebe os caracteres inseridos pelo usuario
// Remove todos os espaços incluídos na entrada

var remove_espacos = (entrada_usuario) => {
	if(!entrada_usuario) return "";
	
	return entrada_usuario.replace(/\s/gi, '')
};

module.exports.remove_espacos = remove_espacos;