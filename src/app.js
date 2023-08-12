import express from 'express'
import { promises as fs } from "fs"

const PORT = 4000
const app = express()
const path = './src/productos.json'

const prods = JSON.parse(await fs.readFile(path, 'utf-8'))



app.get('/', (req, res) => {
    res.send(prods)
})

app.get('/products', (req, res) => {
    const { limit } = req.query
    if (limit) {
        const products = prods.slice(0, limit)
        res.send(products)
    }
    res.send(prods)
})

app.get('/products/:id', (req, res) => {
    const prod = prods.find(prod => prod.id === parseInt(req.params.id))
    if
        (prod) res.send(prod)
    else
        res.send("producto inexistente")
    res.send("producto")
})



app.listen(PORT, () => {
    console.log(`funciona en el puerto ${PORT}`)
})