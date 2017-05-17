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

cards.put('/', (req, res) =>{
  console.log(req.body);
  let promise;
  if(req.body.status === "Queue"){
    promise = Card.update(
      {status: "In Progress"},
      {where: {id: req.body.id}});
  }
  else if(req.body.status === "In Progress"){
    promise = Card.update(
      {status: "Complete"},
      {where: {id: req.body.id}});
  }
  else if(req.body.status === "Complete"){
    promise = Card.update(
      {status: "Hide"},
      {where: {id: req.body.id}});
  }
  if( promise ){
    promise.then((data) =>{
      console.log(data);
      res.json(data);
    });
  }
  else{
    res.send(400);
  }
});


cards.post('/',(req, res) =>{
  Card.create(req.body)
  .then(card => {
    res.json( card );
  });
});

cards.delete('/',(req, res) =>{
  console.log(req.body);
  Card.destroy({
    where: {id: req.body.id}
  });
});

module.exports = cards;