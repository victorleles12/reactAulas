import React from 'react'
import Produtos from '../../data/produtos'
import '../repeticao/ListaProdutos.css'


export default () => {

    const listProd = Produtos.map((produtos, i) => {
        return (
       
            <tr key={produtos.id} className={i%2==0? 'Par': ''}>
                <td>{produtos.id}</td>
                <td>{produtos.produto}</td>
                <td>{produtos.preco}</td>
            </tr>
        )
    })

    return(
        <div className="ListaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>    
                    {listProd}
                </tbody>
            </table>
        </div>
)

}