function abreviarNomes(nomes) {
    return nomes.map(nome => {
        const nomeDividido = nome.split(" ")
        return nomeDividido.map((parteNome, index) => {
            if (index === nomeDividido.length - 1) {
                return parteNome
            }

            return `${parteNome.slice(0, 1).toUpperCase()}.`
        }).join(" ")
    })
}
