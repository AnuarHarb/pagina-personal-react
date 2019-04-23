const express = require('express');
const router = express.Router();
const info = require('./info');
const cors = require('cors');

  router.use(cors());
  router.use(express.json());

  router.all('/', (req, res)=> {
    res.json({
      info: `${process.env.url}/api/info`
    })
  })

  router.use('/info', info);

module.exports = router;
