
# API CRUD de Usuários
 
API REST para gerenciar usuários, construída com Node.js, Express e SQLite.
 
## Requisitos
 
- Node.js 18+
- npm
## Instalação
 
```bash
npm install
npm start
```
 
O servidor roda em `http://localhost:3000`.
 
## Endpoints
 
| Método   | Rota    | Descrição             |
| -------- | ------- | --------------------- |
| `GET`    | `/`     | Listar todos usuários |
| `POST`   | `/`     | Criar usuário         |
| `PUT`    | `/:id`  | Atualizar usuário     |
| `DELETE` | `/:id`  | Deletar usuário       |
 
## Exemplos
 
> **Windows:** Use `curl.exe` ou [Postman](https://www.postman.com) em vez de `curl`.
 
**Criar usuário**
```bash
curl -X POST http://localhost:3000 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João","email":"joao@email.com"}'
```
 
**Listar usuários**
```bash
curl http://localhost:3000
```
 
**Atualizar usuário**
```bash
curl -X PUT http://localhost:3000/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@email.com"}'
```
 
**Deletar usuário**
```bash
curl -X DELETE http://localhost:3000/1
```
 
## Estrutura do projeto
 
```
├── app.js            # Servidor principal
├── config/
│   └── db.js         # Conexão com banco de dados
├── models/           # Queries ao banco
└── controller/       # Lógica das rotas
```