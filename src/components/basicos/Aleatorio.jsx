import React from 'react'

export default (props) => {
    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);
    let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;

    return(
        <div>
            <p>O numero Sorteado foi {sorteio}</p>
        </div>
    )
}