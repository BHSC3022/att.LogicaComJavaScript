function segundoMaiorNumero(array) {
    var SegundoMaior = array.sort(function(a, b) {
      return b - a
    })
  
    return SegundoMaior[1]
  }
  
  var numeros = [5, 3, 8, 2, 9]
  console.log(segundoMaiorNumero(numeros))