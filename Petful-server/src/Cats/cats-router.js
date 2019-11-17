const express = require('express');
const CatsService = require('./cats-service');

const catsRouter =express.Router();


catsRouter
  .route('/')
  .get((req, res) => {
    const cats = CatsService.getCats();
    res.json(cats);
  }) 
  .delete((req, res) => {
    res.status(200)
      .send(CatsService.adoptCat());
  });



module.exports = catsRouter;