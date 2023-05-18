//configuração inicial de um servidor
const express = require("express")
//configuração da rota
const router = express.Router()

const app = express()
const porta = 3333

//array de objetos (lista de mulhere)
const mulheres = [
    {
        nome: 'Thabata Nascimento',
        imagem: 'https://photos.app.goo.gl/H6ftxHyh41JAgZbd7',
        minibio: 'linda e querida'
    },
    {
        nome: 'fulana',
        imagem: 'https://photos.app.goo.gl/H6ftxHyh41JAgZbd7',
        minibio: 'deusa'
    },
    {
        nome: 'ciclana',
        imagem: 'https://photos.app.goo.gl/H6ftxHyh41JAgZbd7',
        minibio: 'rainha' 
    }
]


//criar função mostraMulheres
function mostraMulheres (request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

//continuação da cofiguração da rota
app.use(router.get('/mulheres', mostraMulheres))

app.listen(porta, mostraPorta)