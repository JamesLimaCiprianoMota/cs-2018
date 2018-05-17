// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

const valida_entrada = require("../valida_entrada");

const valida_entrada = new valida_entrada();



// Abaixo segue listagem dos casos de teste
// 1º identificado por "Valida Quantidade Parâmetros Correta".

QUnit.test('TU001 - Valida Quantidade Parâmetros', function (assert) {
  // Valida a quantidade de parâmetros da entrada
  let resultado = valida_entrada.valida_quantidade(" 1 1 2999 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "true", "TU001 - Aprovado");
});

// 2º identificado por "Valida Quantidade Parâmetros Abaixo do Esperado".

QUnit.test('TU002 - Valida Quantidade Parâmetros Abaixo do Esperado', function (assert) {
  // Valida a quantidade de parâmetros da entrada
  let resultado = valida_entrada.valida_quantidade(" 2 2013 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU002 - Aprovado");
});

// 3º identificado por "Valida Quantidade Parâmetros Acima do Esperado".

QUnit.test('TU003 - Valida Quantidade Parâmetros Acima do Esperado', function (assert) {
  // Valida a quantidade de parâmetros da entrada
  let resultado = valida_entrada.valida_quantidade(" 8 2013 2018 3");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU003 - Aprovado");
});

// 4º identificado por "Valida se Primeiro Parâmetros é maior que 0".

QUnit.test('TU004 - Valida Primeiro Parâmetro maior que 0', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 0 8 1989 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU004 - Aprovado");
});

// 5º identificado por "Valida se Primeiro Parâmetros é menor que 32".

QUnit.test('TU005 - Valida Primeiro Parâmetro é menor que 32', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 32 3 2013 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU005 - Aprovado");
});

// 6º identificado por "Valida se Segundo Parâmetro é maior que 0".

QUnit.test('TU006 - Valida se Segundo Parâmetros é maior que 0', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 30 0 2013 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU006 - Aprovado");
});

// 7º identificado por "Valida se Segundo Parâmetro é menor que 13".

QUnit.test('TU006 - Valida se Segundo Parâmetros é menor que 13', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 25 13 2025 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU007 - Aprovado");
});

// 8º identificado por "Valida se Terceiro Parâmetro é maior que 1753".

QUnit.test('TU008 - Valida se Terceiro Parâmetros é maior que 1753', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 12 08 1753 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU008 - Aprovado");
});


// 9º identificado por "Valida se Primeiro Parâmetro não é numérico".

QUnit.test('TU009 - Valida se Primeiro Parâmetro não é Numérico', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" ABC 3 2013 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU009 - Aprovado");
});

// 10º identificado por "Valida se Segundo Parâmetro não é numérico".

QUnit.test('TU010 - Valida se Segundo Parâmetro não é numérico', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 10 XPTO 2015 ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU010 - Aprovado");
});

// 11º identificado por "Valida se Terceiro Parâmetro não é numérico".

QUnit.test('TU011 - Valida se Terceiro Parâmetro não é numérico', function (assert) {
  // Valida o tipo numérico para os parâmetros da entrada
  let resultado = valida_entrada.valida_itens(" 20 06 YZX ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "false", "TU011 - Aprovado");
});
