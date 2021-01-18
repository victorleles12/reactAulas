function sortfunction(a, b){
    return (a - b)
  }


function gerarNumeros(qrde, sorteio){
    let numeros = []
    while (numeros.length < sorteio){
    var aleatorio = Math.floor(Math.random() * qrde +1)
        if (numeros.indexOf(aleatorio) == -1)
            numeros.push(aleatorio)
    }

    console.log(numeros.sort(sortfunction))
}

gerarNumeros(60, 6)