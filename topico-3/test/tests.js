(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Função que recebe os caracteres inseridos pelo usuario
// Remove todos os espaços incluídos na entrada

function removeEspacos(entrada_usuario){
	module.exports.sem_espacos = (entrada_usuario) => trim(entrada_usuario)
}

function trim(entrada_usuario) {
	return entrada_usuario.replace(/^\s+|\s+$/g,"");
}	

exports.remove_espacos = remove_espacos;

},{}],2:[function(require,module,exports){
// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

const operacao = require("../remove_espacos");

// Abaixo segue o nosso primeiro teste
// identificado por "Remove espacos".

QUnit.test("remove espacos", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.removeEspacos(" alo al o ");

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "aloalo", "Remoção de espaços em conformidade");
});

},{"../remove_espacos":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92OS4zLjAvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLi4vcmVtb3ZlX2VzcGFjb3MuanMiLCJ0ZXN0YS1yZW1vdmVfZXNwYWNvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gRnVuw6fDo28gcXVlIHJlY2ViZSBvcyBjYXJhY3RlcmVzIGluc2VyaWRvcyBwZWxvIHVzdWFyaW9cbi8vIFJlbW92ZSB0b2RvcyBvcyBlc3Bhw6dvcyBpbmNsdcOtZG9zIG5hIGVudHJhZGFcblxuZnVuY3Rpb24gcmVtb3ZlRXNwYWNvcyhlbnRyYWRhX3VzdWFyaW8pe1xuXHRtb2R1bGUuZXhwb3J0cy5zZW1fZXNwYWNvcyA9IChlbnRyYWRhX3VzdWFyaW8pID0+IHRyaW0oZW50cmFkYV91c3VhcmlvKVxufVxuXG5mdW5jdGlvbiB0cmltKGVudHJhZGFfdXN1YXJpbykge1xuXHRyZXR1cm4gZW50cmFkYV91c3VhcmlvLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIik7XG59XHRcblxuZXhwb3J0cy5yZW1vdmVfZXNwYWNvcyA9IHJlbW92ZV9lc3BhY29zO1xuIiwiLy8gT2J0w6ltIHJlZmVyw6puY2lhIHBhcmEgbyBtw7NkdWxvIHF1ZSBjb250w6ltIGZ1bsOnw6NvIGEgc2VyIHRlc3RhZGEuXG4vLyBPYnNlcnZlIHF1ZSBvIHByZXNlbnRlIGPDs2RpZ28gZGUgdGVzdGUgZXN0w6Fcbi8vIGVtIGRpcmV0w7NyaW8gZXNwZWPDrWZpY28gKHRlc3QpLCBlbnF1YW50byBvXG4vLyBjw7NkaWdvIHRlc3RhZG8gZXN0w6EgaXNvbGFkbyBlbSBvdXRybyBkaXJldMOzcmlvLlxuXG5jb25zdCBvcGVyYWNhbyA9IHJlcXVpcmUoXCIuLi9yZW1vdmVfZXNwYWNvc1wiKTtcblxuLy8gQWJhaXhvIHNlZ3VlIG8gbm9zc28gcHJpbWVpcm8gdGVzdGVcbi8vIGlkZW50aWZpY2FkbyBwb3IgXCJSZW1vdmUgZXNwYWNvc1wiLlxuXG5RVW5pdC50ZXN0KFwicmVtb3ZlIGVzcGFjb3NcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuXG4gIC8vIEV4ZWN1dGEgYSBvcGVyYcOnw6NvIHF1ZSBkZXNlamFtb3MgdGVzdGFyXG4gIGxldCByZXN1bHRhZG8gPSBvcGVyYWNhby5yZW1vdmVFc3BhY29zKFwiIGFsbyBhbCBvIFwiKTtcblxuICAvLyBWZXJpZmljYSBzZSBvIHJlc3VsdGFkbyBwcm9kdXppZG8gw6kgbyBlc3BlcmFkby5cbiAgYXNzZXJ0LmVxdWFsKHJlc3VsdGFkbywgXCJhbG9hbG9cIiwgXCJSZW1vw6fDo28gZGUgZXNwYcOnb3MgZW0gY29uZm9ybWlkYWRlXCIpO1xufSk7XG4iXX0=
