import React, { useState } from "react";
import { insertClientes } from "../../Api/clientesApi";

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
      setValues({ id: "", nome: "", cor: "", preco: "", img: "" });
    },
  };
};