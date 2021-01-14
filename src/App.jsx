import React from 'react'
import './App.css'
import Fragmento from './components/basicos/Fragmento'
import ComParans from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProduto from './components/repeticao/ListaProdutos'

export default () => {
    return(
        <div className="App">

            <h1>FUNDAMENTOS REACT</h1>
            
            <div className="Cards"> 

            <Card titulo="#7 - Exercicio Repetição" color="#3a9ad9">
                    <ListaProduto></ListaProduto>
                </Card>

                <Card titulo="#6 - Repetição" color="#ff4c65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#5 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Leles"> 
                        <FamiliaMembro nome="Victor"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Carlos"/>
                    </Familia>
                </Card>
                
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