import express, { response } from "express"; // detch faz a requisição e retorna com a promessa
import { request } from "http";
import cliente from '../infra/database.js'
import database from '../infra/database.js'

const router = express.Router();


//buscar usuarios
router.get('/', (request, response)=>{
    response.send(database)
})

//listar meu usuarios/clientes/alunos
router.get('/id/:id', (request, response)=>{
    const id = request.params.id
    const pesquisa = database.clientes[i];

    response.send(pesquisa)
})
//inserindo novos usuarios /get- listar- post inserir

router.post('/add', (request, response)=>{
    const body = request.body
    const newUser = new cliente (body.nome, body.email, body.senha)

    database.clientes.push(newUser)]
    response.send(`Usuário ${newUser.nome} ${newUser.sobrenome} adicionado com sucesso`)
})
//apagar usuário por ID

router.delete('/delete/:id', (request, response)=>{
    const id = request.params.id;
    database.clientes.splice(id,1)

    response.send(`ID "${id}" removido do banco de dados com SUCESSO!`)
})

//modificar ro´riedade do usuário/cliente/aluno 

router.patch('/update/:id', (request, response)=>{
    const id = request.params.id;
    const body = request.body

    let usuárioEdit ={
        id: id,
        nome: body.nome!==undefined ?  body.nome: database.clientes[id].nome,
        sobrenome: body.sobrenome!==undefined ? body.sobrenome: database.clientes[id].sobrenome, 
        cpf: body.cpf!==undefined ? body.cpf : database.clientes[id].cpf,
        email: body.email!==undefined ? body.email : database.clientes[id].email, 
        telefone: body.telefone!==undefined ? body.telefone : database.clientes[id].telefone,   

    };
     database.clientes[id] = usuárioEdit;

     response.send(`Id "${id}" atualizado`)
})

export default router