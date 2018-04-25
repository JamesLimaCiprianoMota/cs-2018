// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

ordena = require("../ordena");

// Abaixo segue o nosso primeiro teste
// identificado por "Remove espacos".

QUnit.test("ordena", function (assert) {
  // Executa a operação que desejamos testar
  let resultado = ordena(" alo al o ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "aalloo", "Ordenação Realizada com sucesso");
});
