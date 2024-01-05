import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        marca: "Tesla",
        modelo: "Model S",
        ano: 2023,
        cor: "Preto"
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
