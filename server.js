import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async  (request, response) =>{
       
      await prisma.user.create({
            data: {  
                email: request.body.email,
                name: request.body.name,
                age: request.body.age
            }
        })
        response.status(201).json(request.body)
    
})

app.get('/usuarios', (request, response)  => {
    prisma.user.findMany()
        .then((users) => {
            response.status(200).json(users)
        })
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