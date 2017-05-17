/*jshint esversion: 6*/

const express = require('express');
const users = express.Router();
const { User } = require('../../models');

users.post('/',(req, res) =>{

  console.log(req.body);
  // User.create(req.body)
  // .then(card => {
  //   res.json( card );
  // });
});


module.exports = users;