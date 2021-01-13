import React from 'react'   


export default function(props){
    return(
        <div>
            <h1>Situação do aluno</h1>
            <p>O aluno {props.Name} tem media {props.Media}</p>
        </div>
    )
}