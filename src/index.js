// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa:');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)?');
//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
let valorFinal;
    if (metodoPagamento === "PIX" || metodoPagamento === "dinheiro") {
    valorFinal = valorTotal * 0.9 / numeroPessoas;        
} else {(metodoPagamento === "cartão") 
    valorFinal = valorTotal / numeroPessoas;
} 

// Exibindo os resultados
console.log(valorFinal, "pra cada")