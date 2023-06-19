function multiplicalcaoSemParam(a,b){
    var resultado = 0
    for (let i = 0; i < b; i++){
        resultado *=a
    }
    return resultado
}
console.log(multiplicalcaoSemParam(1,2))