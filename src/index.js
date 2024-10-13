console.log("Hello World");

const addProdutos = prompt("adicione um produto");
alert(addProdutos);

// Lista de produtos disponíveis com nome e preço
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Sapato", preco: 150 },
  { nome: "Boné", preco: 25 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho() {
  // Exibe os produtos disponíveis
  let listaProdutos = "Escolha um produto para adicionar ao carrinho:\n";
  produtos.forEach((produto, index) => {
    listaProdutos += `${index + 1}. ${produto.nome} - R$ ${produto.preco}\n`;
  });

  // Captura a escolha do cliente
  let escolha = parseInt(prompt(listaProdutos)) - 1;

  if (escolha >= 0 && escolha < produtos.length) {
    const produtoSelecionado = produtos[escolha];

    // Confirmação de quantidade
    let quantidade = parseInt(
      prompt(
        `Quantas unidades de ${produtoSelecionado.nome} você deseja adicionar?`
      )
    );

    // Confirmação de adição ao carrinho
    let confirmar = confirm(
      `Você escolheu ${quantidade}x ${produtoSelecionado.nome} no valor de R$ ${produtoSelecionado.preco} cada. Deseja adicionar ao carrinho?`
    );

    if (confirmar) {
      let itemNoCarrinho = carrinho.find(
        (item) => item.nome === produtoSelecionado.nome
      );

      if (itemNoCarrinho) {
        // Se o produto já está no carrinho, incrementa a quantidade
        itemNoCarrinho.quantidade += quantidade;
      } else {
        // Se o produto não está no carrinho, adiciona um novo item
        carrinho.push({ ...produtoSelecionado, quantidade: quantidade });
      }
      alert(
        `${quantidade}x ${produtoSelecionado.nome} adicionado ao carrinho.`
      );
    }
  } else {
    alert("Produto inválido. Tente novamente.");
  }
}

// Função para visualizar o carrinho
function visualizarCarrinho() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
  } else {
    let resumoCarrinho = "Seu carrinho:\n";
    let totalCompra = 0;

    carrinho.forEach((item) => {
      let subtotal = item.preco * item.quantidade;
      resumoCarrinho += `${item.nome} - R$ ${item.preco} x ${item.quantidade} = R$ ${subtotal}\n`;
      totalCompra += subtotal;
    });

    resumoCarrinho += `\nTotal da compra: R$ ${totalCompra}`;
    alert(resumoCarrinho);
  }
}

// Função principal do sistema de e-commerce
function iniciarEcommerce() {
  let continuar = true;

  while (continuar) {
    let opcao = prompt(
      "Escolha uma opção:\n1. Adicionar produto ao carrinho\n2. Visualizar carrinho\n3. Sair"
    );

    switch (opcao) {
      case "1":
        adicionarAoCarrinho();
        break;
      case "2":
        visualizarCarrinho();
        break;
      case "3":
        continuar = false;
        alert("Obrigado por utilizar nosso e-commerce!");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}

// Inicia o sistema de e-commerce
iniciarEcommerce();
