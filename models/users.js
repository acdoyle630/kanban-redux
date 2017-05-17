/*jshint esversion: 6*/

const express = require('express');
const router = express.Router();

module.exports = function(sequelize, DataType){
  var Card = sequelize.define("Card", {
    username:
    {
      type: DataType.TEXT,
      allowNull: false
    },
    password: DataType.TEXT,

  });
  return Card;
};