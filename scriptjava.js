
function processarPedido(pedido) {
console.log(`Processando pedido ${pedido.id}...`);
return new Promise(resolve => {
setTimeout(() => {
console.log(`Pedido ${pedido.id} processado!`);
resolve({ ...pedido, status: "Completo" });
}, 3000);
});
}
async function main() {
const pedido = { id: 123, produto: "Livro de React", valor: 79.90 };
const pedidoProcessado = await processarPedido(pedido);
console.log("Resultado final:", pedidoProcessado);
}
main();