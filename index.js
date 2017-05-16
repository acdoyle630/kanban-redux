/*jshint esversion: 6*/

const session = require('express-session');
const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.envPORT || 6969;
const bodyParser = require('body-parser');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { user } = db;




app.use(bodyParser.json({extended: true}));




app.use('/api', require('./api'));


app.listen(6969, () =>{
  console.log(`listening on port: ${PORT}`);
  db.sequelize.sync({forceSync: true});
});

