//Pegar elementos pelo ID
//Métido mais antigo
const getId1= document.getElementById('herois');
console.log(getId1);

//Seletor geral - pega qualquer  tipo de elemento
//queryselector ele retorna o primeiro elemento que encontra
// # define o elemento como sendo um ID
// Se você tiver um retorno como null - significa que ele não encontrou o elemento
const getId2 = document.querySelector('#heroi-um');
console.log(getId2);

//Pegar tela clas - Classes CS podem ser utilizada por qualquer elemento
const getClass1 = document.getElementsByClassName('nome')
console.log(getClass1);
console.log(getClass1[3]);
console.log(getClass1[3].textContent);
getClass1[3].textContent = 'Mulher Maravilha';
const exemplo = getClass1[3].textContent;
// console.log(exemplo);
// console.log(typeof exemplo);
// console.log(exemplo[2]);

// const VirouArray = Array.from(exemplo);
// console.log(virouArray);

//Para indicar que é uma classe devemos colocar o ponto final no inicio do nome do seletor
//Para retornar todos os elementos devemos usar o querySelectorAll
const getClass2 = document.querySelector('.nome');
console.log(getClass2);

//Pegar pela tag
const getTag1 = document.getElementsByTagName('td');
console.log(getTag1);

const getTag2 = document.querySelectorAll('tr');
console.log(getTag2);