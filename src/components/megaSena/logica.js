function sortfunction(a, b){
    return (a - b)
  }

function gerarNumeros(sorteio){
    let numeros = []
    while (numeros.length < sorteio){
    var aleatorio = Math.floor(Math.random() * 60 +1)
        if (numeros.indexOf(aleatorio) == -1)
            numeros.push(aleatorio)
    }
    console.log(numeros.sort(sortfunction))
}

gerarNumeros(6)