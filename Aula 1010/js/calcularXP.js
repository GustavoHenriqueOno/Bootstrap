// pegando o botão no HTML
const botao = document.querySelector('#calcular');

// adicionando um escutador de eventos que foi buscado na página vamos fazer com que ele 'escute' o evento click
// () => arrow function = Forma de criar uma função anônima no js
botao.addEventListener('click', () => {
    // alert('oi, o botão foi clikado')

    // pegando todo o heróis, vamos usar a classe herói, pois cada linha que contém o herói possui essa casse
    const herois = document.querySelectorAll('.heroi');

    // vamos percorrer o array herois usando um forEach - ele percorre uma lista e para  cada elemento dessa lista uma função será executada vamos passar como parâmetro um heroi por  vez  no forEach
    herois.forEach(heroi => {
        // recuperar a força a agilidade  e a velocidade de cada herói
        const forca = Number(heroi.querySelector('.forca').textContent);
        const velocidade = Number(heroi.querySelector('.velocidade').textContent);
        const agilidade = Number(heroi.querySelector('.agilidade').textContent);
        const xpFinal = (forca + velocidade + agilidade)/3;  
        
        // exibir xpFinal
        heroi.querySelector('.xp').textContent = xpFinal.toFixed();

        // inserindo as classes que estão no Bootstrap e foram carregadas no navegador
        if(xpFinal < 80){
            heroi.classList.add('bg-danger', 'text-light');
        }
    });

})