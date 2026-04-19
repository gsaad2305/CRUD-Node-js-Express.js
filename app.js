const express = require('express')
const connectionSQL = require('./config/db');
const UserController = require('./controller/userController');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

let db;

app.get('/', (req, res) => UserController.getAll(req, res));
app.post('/', (req, res) => UserController.create(req, res));
app.delete('/:id',(req,res)=> UserController.delete(req,res,db));
app.put('/:id',(req,res)=> UserController.update(req,res,db));

async function startServer(){
    try{
        db = await connectionSQL();
        console.log('Banco de dados conectado com sucesso!');
        app.listen(PORT,()=>{
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }catch(error){
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
}

startServer();