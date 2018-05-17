/**
  *
  * Realiza validação dos dados de entrada
  *
  * @type {module.Valida_Entrada}
  */
  module.exports = class Valida_Entrada {
  
  	/**
  	 * Valida se os dados de entrada estão corretos para cálculo do dia da semana.
  	 *
  	 * @param {number} a Um dos argumentos
  	 * @param {number} b O outro argumento.
  	 * @returns {boolean} Para se a validação foi correta.
  	 */
  	 
    	 
  	 valida_quantidade(arg1, arg2, arg3, arg4){
		//valida se existem exatamente 3 entradas nos parâmetros inseridos		
		if (!Number.isNaN(arg1)) {
			if (!Number.isNaN(arg2)) {
				if (!Number.isNaN(arg3)) {
					if (Number.isNaN(arg4)) {
						return true;
					}
				}
			}
					
		} else 
  	 	return false;
  	 }
  	 
  	 valida_itens(arg1, arg2, arg3, arg4){
  	 	return false;
  	 }  
  };
