import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getProdutos } from '../../api/apiProdutos';


import "./AddProdutos.css"


import React, { useState } from "react";

import { atualizarProdutos } from '../../api/apiProdutos';

const useForm = (propsDoForm) => {
    const [values, setValues] = useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
        },
        clearform() {
            setValues({ nome: "", cor: "", preco: "", img: "" });
        },
    };
};




function AtualizarProdutos() {
    
    const formAtualizar = useForm({
        initialValues: { nome: "", cor: "", preco: "", img: "" },
    });
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(formAtualizar.values);
            formAtualizar.clearform();
            atualizarProdutos(formAtualizar.values);
            alert("Produto Atualizado");
        }}>
            <div className='formContainer'>


                <h1 className='formTitulo'>Atualizar produto</h1>
                <div class="d-flex justify-content-center">
                    <DropdownButton id="dropdown-basic-button" title="Escolha o produto">
                        
                        <Dropdown.Item href="#/action-1">{produtos ? produtos.map((item) => (
                            item.nome)): "Opa"}</Dropdown.Item>

                    </DropdownButton>
                </div>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name="nome" type="text" placeholder="Digite o nome do produto" value={formAtualizar.values.nome}
                        onChange={formAtualizar.handleChange} />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicColor">
                    <Form.Label>Cor</Form.Label>
                    <Form.Control name="cor" type="text" placeholder="Digite a cor do produto" value={formAtualizar.values.cor}
                        onChange={formAtualizar.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCost">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control name="preco" type="text" placeholder="Digite o preço do produto" value={formAtualizar.values.preco}
                        onChange={formAtualizar.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control name="img" type="text" placeholder="Coloque a imagem do produto" value={formAtualizar.values.img}
                        onChange={formAtualizar.handleChange} />
                </Form.Group>
                <div class="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                        Cadastrar produto
                    </Button>
                </div>
            </div>


        </Form>
    );
}

export default AtualizarProdutos;