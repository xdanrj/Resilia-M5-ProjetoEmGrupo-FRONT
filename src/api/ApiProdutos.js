import api from "./apiBase"


export async function getProdutos() {
  const resposta = await api.get('/produtos')
  return resposta.data.msg
}

export async function postProdutos(obj) {
  await api.post('/produtos', obj)
}

export async function deleteProdutos(parametro) {
  await api.delete(`/produtos/id/${parametro}`);
  alert("Produto Deletado");
}
export async function atualizarProdutos(parametro, obj) {
  await api.put(`/produtos/id/${parametro}`, obj)
}