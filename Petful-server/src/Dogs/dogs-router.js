const express = require('express');
const DogsService = require('./dogs-service');

const dogsRouter =express.Router();


dogsRouter
  .route('/')
  .get((req, res) => {
    const dogs = DogsService.getDogs();
    res.json(dogs);
  }) 
  .delete((req, res) => {
    res.status(200).send(DogsService.adoptDog());
  });



module.exports = dogsRouter;