// O carrinho guarda uma entrada por unidade adicionada.
// Ex.: duas camisetas iguais = o mesmo produto duas vezes no array.

function obterSubtotal(item) {
  const produto = item.produto ?? item
  const quantidade = item.quantidade ?? 1
  const preco = Number(produto?.price)

  if (!Number.isFinite(preco)) {
    return 0
  }

  return preco * quantidade
}

export function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => total + obterSubtotal(item), 0)
}

export function agruparItens(carrinho) {
  const itens = []
  carrinho.forEach((produto) => {
    const existente = itens.find((item) => item.produto.id === produto.id)
    if (existente) {
      existente.quantidade += 1
    } else {
      itens.push({ produto, quantidade: 1 })
    }
  })
  return itens
}
