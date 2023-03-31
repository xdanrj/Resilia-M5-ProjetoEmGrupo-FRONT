import React from 'react'
import "./CardProdutos.css"

const CardProdutos = ({ nome, cor, preco, img}) => {
    
return(
        <div className='container'>
        <img src={img}/>
       
        <p>{nome}</p>
        <p>Cor: {cor}</p>
        <p>Preco: {preco}</p>
        </div>
)}

export default CardProdutos