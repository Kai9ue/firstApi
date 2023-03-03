const UserController = require('../controllers/UserController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,  //função que quero executar toda vez que essa rota for chamada
  },
];