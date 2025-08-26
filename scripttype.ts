// Definindo a interface para o pedido
interface Pedido {
  id: number;
  produto: string;
  valor: number;
  status?: string;
}

// Função para processar o pedido
function processarPedido(pedido: Pedido): Promise<Pedido> {
  console.log(`Processando pedido ${pedido.id}...`);

  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Pedido ${pedido.id} processado!`);
      resolve({ ...pedido, status: "Completo" });
    }, 3000);
  });
}

// Função principal
async function main(): Promise<void> {
  const pedido: Pedido = { id: 123, produto: "Livro de React", valor: 79.90 };
  const pedidoProcessado: Pedido = await processarPedido(pedido);
  console.log("Resultado final:", pedidoProcessado);
}

// Executando
main();
