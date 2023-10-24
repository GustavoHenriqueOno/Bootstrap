// Criando um objeto literalmente
const humano = {
    nome: 'Gustavo Ono', 
    idade: '18',
    email: 'gustavohenriqueono@gmail.com',
    logado: true
}

// Exibição no console com método normal
console.log(humano);

// Exibição no console para cada uma das propriedades
console.log(humano.nome);
console.log(humano.idade);
console.log(humano.email);
console.log(humano.logado);

// Exibição con template string
console.log(`nome: ${humano.nome} - logado: ${humano.logado}`);

// Criando um array de objetos
const pessoas = [
    {nome: 'Eu', idade: 18, logado: true},
    {nome: 'Tu', idade: 22, logado: true}
];
