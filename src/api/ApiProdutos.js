import api from "./apiBase"


export async function getProdutos() {
  const resposta = await api.get('/produtos')
  // console.log(resposta.data.msg)
  return resposta.data.msg
}



