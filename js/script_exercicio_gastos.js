let familia = {
    receitas: [1250, 2400, 301, 1000],
    despesas: [320, 100, 423, 123.23, 124.11, 949.2, 98.98]
}

function somatorio(lista){
    let soma = 0

    for (let item of lista){
        soma += item
    }

    return soma
}


function calcularBalanco(){
    const somaReceitas = somatorio(familia.receitas)
    const somaDespesas = somatorio(familia.despesas)

    const saldo = somaReceitas - somaDespesas

    const saldoPositivo = saldo >= 0

    let mensagemBalanco = 'negativo'

    if (saldoPositivo) {
        mensagemBalanco = 'positivo'
    }

    console.log(`seu saldo é ${mensagemBalanco}, R$ ${saldo.toFixed(2)}`)
}

calcularBalanco()