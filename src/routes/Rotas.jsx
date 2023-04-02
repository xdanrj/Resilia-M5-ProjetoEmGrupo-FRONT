import { Routes, Route } from 'react-router-dom'

import Produtos from '../pages/Produtos/Produtos'

import AddProdutos from '../pages/Produtos/AddProdutos'

import AtualizarProdutos from '../pages/Produtos/AtualizarProdutos'
import Home from '../pages/Home/Home'
import Contato from '../pages/Contato/Contato'

function Rotas() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/addprodutos" element={<AddProdutos />} />
            <Route path="/atualizarprodutos" element={<AtualizarProdutos />} />
            <Route path="/Contato" element={<Contato />} />
        </Routes>
    )
}

export default Rotas