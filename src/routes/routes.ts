import { Router } from "express"
import { UsersController } from "../controllers/usersController"

const routes = Router()

const usersController = new UsersController()

routes.get('/users', usersController.getUsuario)

routes.post('/users', usersController.criarUsuario)

// STATUS CODE
// 200 E 201
// 404

// GET = Ler os dados
// POST = criar dados
// PUT/PATCH = editar dados
// DELETE = deletar dados

export { routes }