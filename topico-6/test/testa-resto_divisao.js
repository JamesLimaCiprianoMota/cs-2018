//Testa o resto da divisão inteira

const Resto_Divisao_Inteiro = require("../resto_divisao");

const resto_divisao_inteiro  = new Resto_Divisao_Inteiro();

QUnit.test('TU001 - Validar entrada de 2 parâmetros', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(0, 1), 0, 'TU001 - Ok');
});


QUnit.test('TU002 - Validar entrada de menos de 2 parâmetros', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(4), "Entrada Inválida!", 'TU002 - Ok');
});

QUnit.test('TU003 - Validar entrada de mais de 2 parâmetros', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(4, 3, 5), "Entrada Inválida!", 'TU003 - Ok');
});

QUnit.test('TU004 - Validar entrada do primeiro parâmetro não inteiro', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(4.5, 3), "Entrada Inválida!", 'TU004 - Ok');
});

QUnit.test('TU005 - Validar entrada do segundo parâmetro não inteiro', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(4.5, 'A'), "Entrada Inválida!", 'TU005 - Ok');
});

QUnit.test('TU006 - Validar entrada de primeiro inteiro zerado', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(0, 4), "Entrada Inválida!", 'TU006 - Ok');
});

QUnit.test('TU007 - Validar entrada de primeiro inteiro negativo', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(-5, 3), "Entrada Inválida!", 'TU007 - Ok');
});

QUnit.test('TU008 - Validar entrada de segundo inteiro negativo', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(5, -3), "Entrada Inválida!", 'TU008 - Ok');
});

QUnit.test('TU009 - Validar entrada de segundo inteiro igual a 1', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(1, 1), 0, 'TU009 - Ok');
});

QUnit.test('TU010 - Validar entradas com resto diferente de zero', function(assert)){
	assert.equal(resto_divisao_inteiro.calcula(40, 16), 8, 'TU010 - Ok');
});
