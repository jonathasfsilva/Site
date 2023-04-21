// throw

function digaMeuNome(nome = ''){
    if (nome === '') {
        throw "Nome é obrigatório"
    }

    console.log('olá ' + nome)
}

// try catch

try {
    digaMeuNome()
} catch(e){
    console.log(e)
}

try {
    digaMeuNome('fulano')
} catch(e){
    console.log(e)
}