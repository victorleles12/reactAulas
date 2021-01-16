import React from 'react'
import DiretaFilho from '../comunicacao/DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho texto='Filho 1' numero={20} bool={true}></DiretaFilho>
        </div>
    )
}