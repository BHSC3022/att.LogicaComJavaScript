function melhoresAlunos(estudantes) {
    var melhorDesempenho = null;
  
    for (var aluno in estudantes) {
      var notas = estudantes[aluno]
      var media = notas.reduce((acc, nota) => acc + nota) / notas.length
  
      if (melhorDesempenho === null || media > melhorDesempenho.media) {
        melhorDesempenho = {
          nome: aluno,
          media: media
        }
      }
    }
  
    return melhorDesempenho
  }
  
  var estudantes = {
    Bruno: [8, 7.6, 8.9, 6],
    Arthur: [9, 6.6, 7.9, 8],
    josericardo: [7, 7, 8, 9]
  }
  
  console.log(melhoresAlunos(estudantes))