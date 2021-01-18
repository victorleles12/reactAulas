import React, { Component } from 'react'
import '../contador/contador.css'
import Display from '../contador/Display'
import Botoes from '../contador/Botoes'
import PassoForm from '../contador/PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = ()=> {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = ()=> {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }


    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>

            </div>
        )
    }

}

export default Contador