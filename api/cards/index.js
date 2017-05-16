/*jshint esversion: 6*/

const express = require('express');
const cards = express.Router();
const { Card } = require('../../models');

cards.get('/', (req, res) => {
  console.log('hit GET ON DB SERVER');
  Card.all()
  .then((cards) =>{
    console.log(cards[0].dataValues);
    res.json(cards);
  });
});

module.exports = cards;