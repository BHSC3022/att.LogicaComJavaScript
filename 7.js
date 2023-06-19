function filtro(item) {
    var numeros = []
  
    for (var i = 0; i < item.length; i++) {
      if (typeof item[i] === 'number') {
        numeros.push(item[i])
      }
    }
  
    return numeros
  }
  
  console.log(filtro(["Alguma coisa", 2, "catapimbas", 4, 5, 7, "teste"]))