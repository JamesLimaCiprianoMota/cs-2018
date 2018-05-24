/*
 * Operação que calcula o resto de uma divisão de inteiros
 * @type {module.Resto_Divisao} 
 */
 
 valida_entrada = require("./valida_entrada");
 
 class Resto_divisao {
 
 
 	/**
     * Calcula o resto da divisão de dois inteiros
     *
     * @param {number} primeiro_inteiro : Um dos argumentos.
     * @param {number} segundo_inteiro :  O outro argumento.
     *
     * @see {@link Matematica#resto_divisao}
     *
     * @returns {number} A soma dos argumentos.
     */
     resto_divisao_inteira(primeiro_inteiro, segundo_inteiro){
     
     	let inteiro_temporario = primeiro_inteiro;
     	 if (!(primeiro_inteiro > 0)){
     	 	return "Entrada Inválida";
     } else if (!(segundo_inteiro >= 1)){
     			return "Entrada Inválida";
     			} else 
     				while (segundo_inteiro <= inteiro_temporario){
     					inteiro_temporario = inteiro_temporario - segundo_inteiro;
	     			} return inteiro_temporario;
     }
   
 }
 
module.exports = Resto_Divisao;
 
