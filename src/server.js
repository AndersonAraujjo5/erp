import './database'
import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import route from './router';
import flash from 'connect-flash';
import middlewareGlobal from './middleware/middleware';

const MySQLStore = require('express-mysql-session')(session);

const app = express();

const whiteList = [
  'https://andersonaraujo.ddns.net',
  'http://andersonaraujo.ddns.net',
  'http://localhost:3000',
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

app.use(cors(corsOptions))
app.use(flash())
app.use(session({
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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use('/', route);

app.listen(process.env.APP_PORT);
