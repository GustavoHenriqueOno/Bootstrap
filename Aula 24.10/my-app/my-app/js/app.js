// Pegando o tbody da página
const tbody = document.querySelector('tbody');

// Pegar o formulário
const form = document.querySelector('form')


// document.querySelector('form').addEventListener('submit', (e) => {  
// })

// Atribuir um escutador de eventos para o submit e criar uma função
form.addEventListener('submit', (e) => {
    // Dentro da função vamos cancelar o evento para isso a função deve receber um submit
    e.preventDefault();
    
    // Pegar os campos do formulário - criaremos um array e colocaremos os campos lé
    const campos = [
        form.querySelector('#usuario'),
        form.querySelector('#email'),
        form.querySelector('#dataCadastro'),
        form.querySelector('#tipoConta')        
    ] 
    
    // criar uma tr que receberá as informações digitadas dentro de td´s
    const tr = document.createElement('tr');


    // percorrer o array para pegar as informações que estão nos campos
    campos.forEach(campo => {

        // para cada campo iremos criar uma td
        const td = document.createElement('td');

        // a td receberá como conteúdo de texto o valor do formulário
        td.textContent = campo.value;

        // colocar a td na tr anteriormente criada
        tr.appendChild(td);
    });

    // colocar a tr dentro do tbody que foi recuperado acima
    tbody.appendChild(tr);

    //limpar o formulário
    form.reset();
    
})

