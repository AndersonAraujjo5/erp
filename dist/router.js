"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _HomeController = require('./controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);
var _ApiController = require('./controllers/ApiController'); var _ApiController2 = _interopRequireDefault(_ApiController);
var _TokenController = require('./controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);
var _loginRequired = require('./middleware/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const route = _express2.default.Router();

route.get('/', _HomeController2.default.home);
route.post('/mail', _HomeController2.default.email);

route.get('/login', _HomeController2.default.login);
route.get('/painel/admin', _loginRequired2.default, _HomeController2.default.painel);
route.get('/painel/clientes',_loginRequired2.default, _HomeController2.default.clientes);

// api modulos
route.post('/painel/admin',_loginRequired2.default, _ApiController2.default.store);
route.post('/api/modulos', _ApiController2.default.index);

route.post('/login', _TokenController2.default.store);
route.get('/logout', _TokenController2.default.logout);


// creat user
route.post('/c', _UserController2.default.store);

exports. default = route;
