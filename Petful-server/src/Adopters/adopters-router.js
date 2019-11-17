const express = require('express');
//const path = require('path');
const AdoptersService = require('./adopters-service');

const adoptersRouter =express.Router();
//const jsonBodyParser = express.json();


adoptersRouter
  .route('/')
  .get((req, res) => {
    const adopters = AdoptersService.getAdopters();
    res.json(adopters);
  })
  .delete((req, res) => {
    res.status(200).send(AdoptersService.adopt());
  });

adoptersRouter
  .route('/post')
  .post((req,res) => {
    console.log(req.body);
    const{name}= req.body;
    const newName = {name};
    console.log('+++',newName)
    const newList = AdoptersService.addName(newName);
    res.json(newList);
  });



module.exports = adoptersRouter;