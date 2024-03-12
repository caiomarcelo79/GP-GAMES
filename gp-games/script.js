const html = document.querySelector('html');
var checkbox = document.querySelector(".checkbox_input");

const cart = document.querySelector('.carrinho_link')

//Contador do passador de imagem
let count = 1;
document.getElementById("radio1").checked = true;

//Intervalo do passador
setInterval(() => {
    passador()
},4000);


//Funçao de passar imagem do slide automaticamente
function passador(){
    count++;
    if (count>4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

//Evento do carrinho
cart.addEventListener('click' , () => {
    window.alert('Seu Carrinho esta vazio!')
})

//Evento da funçao de mudar cor
checkbox.addEventListener('change', () => {
    MudarCor();
});

function MudarCor() {
    const atr = html.getAttribute('contexto');
    if (atr === 'claro') {
        html.setAttribute('contexto', 'escuro');
        console.log('O site está escuro');
    } else {
        html.setAttribute('contexto', 'claro');
        console.log('O site está claro');
    }
}


