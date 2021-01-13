import React from 'react'
import './App.css'
import Fragmento from './components/basicos/Fragmento'
import ComParans from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'

export default () => {
    return(
        <div className="App">

            <h1>FUNDAMENTOS REACT</h1>
            
            <div className="Cards"> 
            
                <Card titulo="#4 - Desafio Aleatorio" color="#FA6900">
                    <h1>Valor Aleatorio</h1>
                    <Aleatorio min={1} max={60}/>
                    <Aleatorio min={1} max={60}/>
                    <Aleatorio min={1} max={60}/>
                    <Aleatorio min={1} max={60}/>
                    <Aleatorio min={1} max={60}/>
                    <Aleatorio min={1} max={60}/>
                </Card>
            
            
            <Card titulo="#3 - Fragmento" color="#E94C6f">
                <Fragmento/>
            </Card>

            <Card titulo="#2 - Com Parametros" color="#E8B71A">
                <ComParans 
                    Name='Victor' 
                    Media={10}/>
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro/>
            </Card>
            </div>
        </div>
    )
}