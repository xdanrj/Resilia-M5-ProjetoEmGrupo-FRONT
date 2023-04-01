import { Routes, Route } from 'react-router-dom'

import Produtos from '../pages/Produtos/Produtos'

import AddProdutos from '../pages/Produtos/AddProdutos'

import AtualizarProdutos from '../pages/Produtos/AtualizarProdutos'
import Home from '../pages/Home/Home'

function Rotas() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/addprodutos" element={<AddProdutos />} />
            <Route path="/atualizarprodutos" element={<AtualizarProdutos />} />
            
        </Routes>
    )
}

export default Rotas