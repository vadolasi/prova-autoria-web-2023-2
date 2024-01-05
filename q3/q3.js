function analiseComplexaDeNumero() {
    return new Promise((resolve, reject) => {
        const numero1 = Math.round(Math.random() * 100)
        const numero2 = Math.round(Math.random() * 100)

        const soma = numero1 + numero2


        if (soma > 150) {
            resolve(`Condição especial atingida com ${soma}!`)
        } else if (numero1 % 10 !== 0 && numero2 % 10 == 0) {
            reject(`Número quase especial encontrado: ${numero2}`)
        } else if (numero1 % 10 == 0 && numero2 % 10 !== 0) {
            reject(`Número quase especial encontrado: ${numero1}`)
        } else {
            resolve(`Resultado comum: ${numero1} e ${numero2}`)
        }
    })
}
