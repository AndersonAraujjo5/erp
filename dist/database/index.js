"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Modulo = require('../models/Modulo'); var _Modulo2 = _interopRequireDefault(_Modulo);
var _Cliente = require('../models/Cliente'); var _Cliente2 = _interopRequireDefault(_Cliente);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const models = [_Modulo2.default, _Cliente2.default, _User2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
