function repetir(elemento, vezes) {
  var arrayResultado = [];

  for (var i = 0; i < vezes; i++) {
    arrayResultado.push(elemento)
  }

  return arrayResultado
}

console.log(repetir("teste", 2))
console.log(repetir(4, 3))