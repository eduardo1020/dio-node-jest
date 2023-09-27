import { Request } from "express";
import { UsersController } from "./usersController";
import { makeMockResponse } from "../mocks/mockResponse";

// describe('Users Controller', () => {
//     it('Deve somar 1 + 1', () => {
//         //Arrange -> preparação do cenário que eu quero testar
//         function soma(a: number, b: number) {
//             return a + b
//         }

//         // act -> testando a ação de somar 1 e 2
//         const resultado = soma(1, 2)

//         //asssert -> faz a validação para ver se o teste vai passar
//         expect(resultado).toBe(3)
//     })
// });

describe('Users Controller', () => {
    const usersController = new UsersController()

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it('Deve listar os usuários cadastrados', () => {
        usersController.getUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(1)
    });

    it('Deve criar um novo usuario', () => {
        mockRequest.body = {
            name: 'Novo usuario'
        }
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ 'nemsagem': `Usuário Novo usuario criado!` })
    });

    it('Não deve criar um usuário com o nome em branco', () => {
        mockRequest.body = {
            name: ''
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'Não é possível criar usuários sem um nome' })
    });
});
