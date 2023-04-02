import React from 'react'
import "./CardProdutos.css"

import { deleteProdutos } from "../../api/ApiProdutos";

const CardProdutos = ({id, nome, cor, preco, img}) => {
        console.log(id)
    
return(
        <div className='container'>
        <img src={img}/>
        
        <p>{nome}</p>
        <p>Cor: {cor}</p>
        <p>Preco: {preco}</p>
        <button onClick={(e) => deleteProdutos(id)}>Deletar</button>
        </div>
)}

export default CardProdutos