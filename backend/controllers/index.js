const express = require('express');
const router = express.Router();


router.use('/quiz', require('./quiz'));
router.use('/', require('./home'));
//router.use('/userResponses', require('./userResponses'));


module.exports = router;
