const express = require('express');
const cors = require('cors');
const dogsRouter = require('../src/Dogs/dogs-router');
const catsRouter = require('../src/Cats/cats-router');
const adoptersRouter = require('../src/Adopters/adopters-router');
const morgan = require('morgan');
const { PORT, CLIENT_ORIGIN } = require('./config');

const app = express();


const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));
app.use(cors());
// app.use(cors({
//   origin: CLIENT_ORIGIN
// }));
app.use(express.json());

app.use('/api/dogs',dogsRouter);
app.use('/api/cats',catsRouter);
app.use('/api/adopters',adoptersRouter);

app.get('/', (req, res) => {
  res.send('Hello From Petful');
});


// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});