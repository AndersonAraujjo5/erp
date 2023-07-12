import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Modulo from '../models/Modulo';
import Cliente from '../models/Cliente';
import User from '../models/User';

const models = [Modulo, Cliente, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
