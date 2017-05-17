/*jshint esversion: 6*/

const path = require('path');
const express = require('express');
const users = express.Router();
const { User } = require('../../models');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');
const saltRounds = 10;


users.post('/',(req, res) =>{
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create({
        username : req.body.username,
        password : hash
      })
      .then((user) =>{
        res.json(user);
      });
    });
  });
});


module.exports = users;