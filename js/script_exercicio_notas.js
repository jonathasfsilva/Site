// transforma notas escolares em caracteres A B C D E ou F

function converteNota(nota) {
    let notaConvertida

    if (100 >= nota && nota >= 90) {
        notaConvertida = 'A'
    } else if (90 > nota && nota >= 80) {
        notaConvertida = 'B'
    } else if (80 > nota && nota >= 70) {
        notaConvertida = 'C'
    } else if (70 > nota && nota >= 60) {
        notaConvertida = 'D'
    } else if (60 > nota && nota >= 0) {
        notaConvertida = 'F'
    } else {
        notaConvertida = 'Nota inválida'
    }

    return notaConvertida
}

console.log(converteNota(101))
console.log(converteNota(100))
console.log(converteNota(90))
console.log(converteNota(89))
console.log(converteNota(80))
console.log(converteNota(79))
console.log(converteNota(70))
console.log(converteNota(69))
console.log(converteNota(60))
console.log(converteNota(59))
console.log(converteNota(0))
console.log(converteNota(-1))