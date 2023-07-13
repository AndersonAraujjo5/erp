import express from 'express';

import HomeController from './controllers/HomeController';
import ApiController from './controllers/ApiController';
import TokenController from './controllers/TokenController';
import loginRequired from './middleware/loginRequired';
import UserController from './controllers/UserController';

const route = express.Router();

route.get('/', HomeController.home);
route.post('/mail', HomeController.email);

route.get('/login', HomeController.login);
route.get('/painel/admin', loginRequired, HomeController.painel);
route.get('/painel/clientes',loginRequired, HomeController.clientes);

// api modulos
route.post('/painel/admin',loginRequired, ApiController.store);
route.post('/api/modulos', ApiController.index);

route.post('/login', TokenController.store);
route.get('/logout', TokenController.logout);


// creat user
route.post('/c', UserController.store);

export default route;
