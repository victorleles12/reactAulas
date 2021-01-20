import React, {useState}from 'react'

export default props => {

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
        return numeros.sort(sortfunction).join(' ')
    }

    const [numeros, setNumeros] = useState((props.qtds || 6))
    return(
        <div>
            <h2>Mega</h2> 
            <h3>{numeros} </h3>
            <button onClick={_ => setNumeros(gerarNumeros)}>Gerar Numeros</button>
        </div>
    )
}