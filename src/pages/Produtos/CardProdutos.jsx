import React from 'react'
import "./CardProdutos.css"

import { deleteProdutos } from "../../api/ApiProdutos";

const CardProdutos = ({id, nome, cor, preco, img}) => {

return(
        <div className='container'>
        <div className='divTextos'>
        <img src={img}/>
        </div>

        <div className='divTextos'>
        <p>{nome}</p>
        </div>

        <div className='divTextos'>
        <p>Cor: {cor}</p>
        </div>

        <div className='divTextos'>
        <p>Preco: {preco}</p>
        </div>
        

        <div className='botaoDeletar'><button onClick={(e) => deleteProdutos(id)}>Deletar</button></div>

        </div>
)}

export default CardProdutos