function inverterVariaveis (a){
const tipo = typeof a
if (tipo == 'boolean') return !a
else if (tipo == 'number') return -a
else 
return `Booelano ou Número esperados, mas o parâmetro é do tipo ${tipo}`
}
console.log(inverterVariaveis(true))
console.log(inverterVariaveis(false))
console.log(inverterVariaveis(1))
console.log(inverterVariaveis(-1))
console.log(inverterVariaveis('Bruno'))