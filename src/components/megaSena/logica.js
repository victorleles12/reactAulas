let controle = 7
let numeros = []


function gerarNumeros(qrde){
    while (numeros.length < controle){
    var aleatorio = Math.floor(Math.random() * qrde +1)
        if (numeros.indexOf(aleatorio) == -1)
            numeros.push(aleatorio)

    }

    return numeros
}



console.log(gerarNumeros(7))