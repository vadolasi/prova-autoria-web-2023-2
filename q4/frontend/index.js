document.getElementById("botao-obter-info").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/")
    const data = await response.json()

    document.getElementById("marca").textContent = `Marca: ${data.marca}`
    document.getElementById("modelo").textContent = `Modelo: ${data.modelo}`
    document.getElementById("ano").textContent = `Ano: ${data.ano}`
    document.getElementById("cor").textContent = `Cor: ${data.cor}`
})
