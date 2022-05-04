import express from 'express'
import { request } from "http";
import ClienteController from './controllers/cliente-controller';
import AlunoDAO from './DAO/AlunoDao';
import router, { Router } from '../TeamTasks/controllers/routers'

const app = express();

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
});

app.use('/clientes-alunos', router)