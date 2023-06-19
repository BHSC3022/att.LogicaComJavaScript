function somarNumeros(array) {
  var soma = 0

  for (var i = 0; i < array.length; i++) {
    soma += array[i]
  }

  return soma
}

var numeros = [1, 2, 3, 4, 5]
console.log(somarNumeros(numeros))