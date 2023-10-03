// Criando um Array
// Antiga - usando o método construtor para gerar o Array
//const meuArray = new array();

// Criação do array - forma mais nova
const pessoas = ["Eu", "Ele", "Nós", "Vós", "Eles"];

// Exibir o array
console.log(pessoas);

// Exiir um índice do array
console.log(pessoas[4]);

console.table(pessoas);

// Inserindo um novo valor no primeiro índice
// Será feita uma nova organização nos índices do array
//pessoas.unshift("Eu Mesmo","Você Mesmo", "Ele Mesmo");
pessoas.unshift("Eu Mesmo");
console.table(pessoas);

// Excuir o primeiro indice do array
// Cuidado pois o valor será perdido, se quiser pode armazenar esse valor em uma variável
pessoas.shift()
console.table(pessoas);

// Inserir no final do array - METODO MAIS COMUM
pessoas.push("Eu Mesmo");
console.table(pessoas);

// Excluir o último índice
// Cuidado pois o valor será perdido, se quiser pode armazenar esse valor em uma variável
pessoas.pop();
console.table(pessoas);

// splice() - inserção - exclusão - alteração de valores em qualquer parte do array
// nomeArray.splice(onde começa, quantos serão afetados)

// Excluir
pessoas.splice(2,2);
console.table(pessoas);

// Inserir partindo de uma posição definida
pessoas.splice(2,0,"Ele", "Nós");
console.table(pessoas);

// Substituir Ele e Nós por ABC e JKL
pessoas.splice(2,2, "ABC", "JKL");
console.table(pessoas);

// Gerando um  array com 10 números sorteados
const numeroSorteado = parseInt(Math.random()*100);
console.log(numeroSorteado);

// Criar um array dos números
const numerosSorteados = [];

// Estrutura de repetição
for(leti = 0; i < 10; i++){
    // gerando um array com 10 números sorteados
    const numeroSorteado = parseInt(Math.random()*10);
    console.log(numeroSorteado);
}
//console.log(numeroSorteado);