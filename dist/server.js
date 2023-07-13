"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _expresssession = require('express-session'); var _expresssession2 = _interopRequireDefault(_expresssession);
var _router = require('./router'); var _router2 = _interopRequireDefault(_router);
var _connectflash = require('connect-flash'); var _connectflash2 = _interopRequireDefault(_connectflash);
var _middleware = require('./middleware/middleware'); var _middleware2 = _interopRequireDefault(_middleware);

const MySQLStore = require('express-mysql-session')(_expresssession2.default);

const app = _express2.default.call(void 0, );

const whiteList = [
  'http://34.125.234.23',
];

const options = {
  connectionLimit: 10,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  createDatabaseTable: true,
}

const sessionStore = new MySQLStore(options);

const corsOptions = {
  origin: function (origin, callback) {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(_cors2.default.call(void 0, corsOptions))
app.use(_connectflash2.default.call(void 0, ))
app.use(_expresssession2.default.call(void 0, {
  name: process.env.SESS_NAME,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  secret: process.env.SESS_SECRET,
  cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
  }
}))

app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use(_express2.default.static(_path2.default.resolve(__dirname,'public')));

app.set('views', _path2.default.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(_middleware2.default);
app.use('/', _router2.default);

app.listen(process.env.APP_PORT);
