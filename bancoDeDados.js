const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados () { //async significa que é um Js assíncrono
   try {
    console.log ('Conexão com o banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL) //await serve para atender diversos clientes por vez. assync e await são usados no JavaScript assíncrono

    console.log ('Conexão com o banco de dados feita com sucesso!')
   } catch(erro) {
        console.log(erro)
   }
}

module.exports = conectaBancoDeDados //module.exports exporta um trecho de código para outro arquivo, se comporta como uma função