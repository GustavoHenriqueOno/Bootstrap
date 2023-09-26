// Mensagem no console
console.log('olá, eu sou o console');
console.log('estou escrevendo no console');

// variáveis USANDO PALAVRA RESERVADA LET
// Javascript não precisa declarar o tipo da variável
// Javascript faz uma tipagem automatica, conformeo valor atribuido
let nome = 'Gustavo Henrique Ono';
let idade = 18;
let logado = true;
const dataNascimento = '20/11';

// exibir as variáveis
console.log(nome , logado);
console.log(idade , dataNascimento);

// Exibir no console o tipo atribuído typeof
// Podemos colocar o nome da váriavel logo após o typeof  ou podemos colocar ele dentro de parênteses para organizar melhor 
console.log(typeof nome, nome);
console.log(typeof logado, logado);
console.log(typeof(dataNascimento), dataNascimento);
console.log(typeof(idade), idade);

console.log(logado);
logado =  false
console.log(logado);

// Váriave var tem escopo global
// let tem escopo de bloco e função
//for(let i = 0; i <= 9; i++){
//    console.log(i);
//}

//console.log(i);

// Concatenação EVITAMOS
console.log("Olá " + nome + " sua idade é " + idade + " anos." );

// TEMPLATE STRING === TEMPLATE LITERAL
// INICIAR E TERMINAR COM O SINAL DE CRASE ``
// PLACEHOLDER USADO PARA CHAMAR: UMA VARIÁVEL - UMA FUNÇÃO - UM OBJETO - UM MÉTODO === ${CHAMANDO QUEM VC QUER}
console.log(`Nome = ${nome} - Data Nascimento = ${dataNascimento}`);

// Sortear um número e exibir no console
let numeroSorteado = Math.ceil(Math.random()*100);
console.log(numeroSorteado);