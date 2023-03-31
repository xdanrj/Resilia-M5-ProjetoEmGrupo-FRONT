import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddProdutos.css"

import React, { useState } from "react";

import { postProdutos } from '../../api/apiProdutos';

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

function AddProdutos() {
    const formCadastro = useForm({
        initialValues: { nome: "", cor: "", preco: "", img: "" },
      });
  return (
    <Form  onSubmit={(e) => {
        e.preventDefault();
        console.log(formCadastro.values);
        formCadastro.clearform();
        postProdutos(formCadastro.values);
        alert("Produto Cadastrado");
      }}>
        <div className='formContainer'>

        <h1 className='formTitulo'>Cadastrar produto</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control name="nome" type="text" placeholder="Digite o nome do produto"  value={formCadastro.values.nome}
          onChange={formCadastro.handleChange} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicColor">
        <Form.Label>Cor</Form.Label>
        <Form.Control name="cor" type="text" placeholder="Digite a cor do produto" value={formCadastro.values.cor}
          onChange={formCadastro.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCost">
        <Form.Label>Preço</Form.Label>
        <Form.Control name="preco" type="text" placeholder="Digite o preço do produto" value={formCadastro.values.preco}
          onChange={formCadastro.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Imagem</Form.Label>
        <Form.Control name="img" type="text" placeholder="Coloque a imagem do produto" value={formCadastro.values.img}
          onChange={formCadastro.handleChange}/>
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

export default AddProdutos;