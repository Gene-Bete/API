import express, { request } from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (request, response) =>{

    users.push(request.body)
        response.status(201).json(request.body)
    
})

app.get('/usuarios', (request, response)  => {
    response.status(200).json(users)
})

app.listen(3000)


/*
     Criar nosso APOI de Usuários 
      
     -Criar um usuário
     -Listar todos os usuários
     -Editar um usuários
     -Deletar um usuários

     
 nome de usuario:  genecavelebete_db_user
senha: NXdS3s7ths4PgSG



1) Tipo de Rota / Método HTTP
2) Endereço
*/