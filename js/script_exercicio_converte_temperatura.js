function transformDegreeMy(degree) {
    let len = degree.length - 1
    let unidade = degree[len]
    let medida = degree.slice(0, len)
    let result

    if (unidade === 'C') {
        result = toFah(medida) + 'F'
    } else if (unidade === 'F') {
        result = toCel(medida) + 'C'
    } else {
        result = 'unidade invalida'
    }

    console.log(result)

}

function transformDegree(degree) {
    let celExiste = degree.toUpperCase().includes('C')
    let fahExiste = degree.toUpperCase().includes('F')
    let result
    degree = degree.slice(0, degree.length - 1)

    if (!celExiste && !fahExiste) {
        throw new Error('Grau não identificado')
    } else if (celExiste) {
        result = toFah(degree) + 'F'
    } else if (fahExiste) {
        result = toCel(degree) + 'C'
    }
    console.log(result)
}

function toFah(c) {
    let f = c * 9 / 5 + 32
    return f
}

function toCel(f) {
    let c = (f - 32) * 5 / 9
    return c
}


transformDegreeMy('50F')
transformDegreeMy('30C')


try {
    transformDegree('50f')
    transformDegree('30C')
}
catch (e) {
    console.log(e.message)
}