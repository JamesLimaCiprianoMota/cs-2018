// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

remove_espacos = require("../remove_espacos");

// Abaixo segue o nosso primeiro teste
// identificado por "Remove espacos".

QUnit.test("remove espacos", function (assert) {
  // Executa a operação que desejamos testar
  let resultado = remove_espacos(" alo al o ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "aloalo", "Remoção de espaços em conformidade");
});
