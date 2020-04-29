
//after getting here, it routes to the product route

const express = require('express');
const router = express.Router();

router.use('/products',require('./products'));

module.exports = router;
