const express = require('express');
const router = express.Router();
const getInfo = require('./getInfo');
const createInfo = require('./createInfo');


router.get('/', getInfo);
router.post('/', createInfo);


module.exports = router;
