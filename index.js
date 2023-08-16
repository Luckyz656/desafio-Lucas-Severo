const cardapio = [
  { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
  { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
  { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
  { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
  { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
  { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
  { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
  { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
];

const formasPagamento = ['dinheiro', 'debito', 'credito'];

function calcularValorDaCompra(itens, formaPagamento) {
  if (!itens.length) {
    return 'Não há itens no carrinho de compra!';
  }

  let valorTotal = 0;
  let itemPrincipalPresente = false;

  for (const item of itens) {
    const cardapioItem = cardapio.find(itemInfo => itemInfo.codigo === item);
    
    if (!cardapioItem) {
      return 'Item inválido!';
    }

    if (item !== 'chantily' && item !== 'queijo') {
      itemPrincipalPresente = true;
    }

    valorTotal += cardapioItem.valor;
  }

  if (!itemPrincipalPresente) {
    return 'Item extra não pode ser pedido sem o principal';
  }

  if (!formasPagamento.includes(formaPagamento)) {
    return 'Forma de pagamento inválida!';
  }

  if (formaPagamento === 'dinheiro') {
    valorTotal *= 0.95; // Desconto de 5% para pagamento em dinheiro
  } else if (formaPagamento === 'credito') {
    valorTotal *= 1.03; // Acréscimo de 3% para pagamento a crédito
  }

  return `Valor total da compra: R$ ${valorTotal.toFixed(2)}`;
}

// Exemplo de uso
const itensDoPedido = ['cafe', 'cafe', 'chantily', 'sanduiche'];
const formaDePagamento = 'dinheiro';
console.log(calcularValorDaCompra(itensDoPedido, formaDePagamento));
