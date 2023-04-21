let expressao = 'A'

switch (expressao) {
    case 'a':
        console.log('foi a letra A')
        break
    case 'b':
        console.log('foi a letra B')
        break
    default:
        console.log('não foi nem A nem B')
        break
}

function calculadora(numero1, operador, numero2){
    let result
    switch (operador){
        case '+':
            result = numero1 + numero2
            break
        case '-':
            result = numero1 - numero2
            break
        case '*':
            result = numero1 * numero2
            break
        case '/':
            result = numero1 / numero2
            break
        default:
            result = 'não implementado'
    }
    return result
}

console.log(calculadora(5,'+',3))
console.log(calculadora(5,'-',3))
console.log(calculadora(5,'*',3))
console.log(calculadora(5,'/',3))