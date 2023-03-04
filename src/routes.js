const UserController = require('../controllers/UserController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,  //função que quero executar toda vez que essa rota for chamada
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
];