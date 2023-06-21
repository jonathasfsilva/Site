const element = document.querySelector('h1');
const campo = document.querySelector('input')

console.log(campo.value = 'oi ') ;

const div = document.createElement('div');
div.innerHTML = '<h2>subtitulo criado por js</h2>';

const body = document.querySelector('body');
const input = body.querySelector('input');
const h1 = body.querySelector('h1');

body.insertBefore(div, input);

let i = 0;

function my_function() {
    console.log('voce chamou a função: ' + i);
    i += 1;
}
function my_function2() {
    console.log('voce chamou a função: ' + i);
    i -= 1;
}

h1.addEventListener('click', my_function);
h1.addEventListener('mouseover', my_function2);