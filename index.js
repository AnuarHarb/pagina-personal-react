const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const api = require('./api');

mongoose.connect(process.env.mongo)
  .then(result => {
    console.log('connected to mongo');
  })
  .catch(err => {
    console.log(err);
  })

app.listen(port, ()=> {
  console.log(`Listening to port ${port}`);
  console.log(`${process.env.url}`);
})

app.use('/api', api);
