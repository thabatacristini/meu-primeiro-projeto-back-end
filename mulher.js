const express = require("express")

//configuração da rota
const router = express.Router()

const app = express()
const porta = 3333

//função mostra mulher
function mostraMulher (request, response) {
    response.json({
        nome: 'Thabata Nascimento',
        imagem: 'https://photos.app.goo.gl/H6ftxHyh41JAgZbd7',
        minibio: 'Linda e querida'
    }) //forma de enviar várias informações organizadas pra web, ao invés de uma só. Criação do objeto.
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)