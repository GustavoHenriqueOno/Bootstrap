// criação do array - forma mais nova

const pessoas = ['Eu','Tu','Ele','Nós','Vós','Eles'];

//exibir o array
console.log(pessoas);

//exibir um índice do array
console.log(pessoas[4]);

console.table(pessoas);

// inserindo um novo valor no primeiro índice
// será feita uma nova organização nos índices do array
// pessoas.unshift('Eu Mesmo','Você Mesmo', 'Ele Mesmo');
pessoas.unshift('Eu Mesmo');

console.table(pessoas);

// excluir o primeiro índice do array
//cuidado pois o valor será perdido,
//se quiser pode armazenar esse valor em uma variável
pessoas.shift();

console.table(pessoas);

//Inserir no final do Array - METODO MAIS COMUM
pessoas.push('Eu Mesmo');
console.table(pessoas);

//Excluir o último índice
//cuidado pois o valor será perdido,
//se quiser pode armazenar esse valor em uma variável
pessoas.pop();
console.table(pessoas);

//splice() - inserção - exclusão - alteração de valores
//Em qualquer parte do array
//nomeArray.splice(onde começa, quantos são afetados)

//excluir
pessoas.splice(2,2);
console.table(pessoas);

//inserir a partir de uma posição definida
pessoas.splice(2,0,'Ele', 'Nós');
console.table(pessoas);

//substituir Ele e Nós por ABC e JKL
pessoas.splice(2,2,'ABC', "JKL", );
console.table(pessoas);

//gerando um array com 10 sorteados * COISA DE CHECKPOINT
const numeroSorteado= [];

//Estrutura de Repetição
for(let i = 0; i < 10; i++){
    numeroSorteado.push(parseInt(Math.random()*10));
}
console.table(numeroSorteado);