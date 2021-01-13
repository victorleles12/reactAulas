import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return(
        <div>
                <FamiliaMembro nome="Victor"   sobrenome={props.sobrenome} />
                <FamiliaMembro nome="Ana" {...props}/>
                <FamiliaMembro nome="Carlos" sobrenome="Leles"/>
        </div>
    )
}