const express = require('express');
const router = express.Router();
const welcome = require('../logger/logger')
const date = require('../util/helper')
const month = require('../util/helper')
const getbatch = require('../util/helper')
const third = require('../validator/formatter')
const mov = require("../logger/movies")
const new1 = require('../validator/lodash')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    welcome.welcome('Ankit')
    date.date()
    month.month()
    getbatch.getBatchinfo()
    third.letsTrim('    Ankit kharola    ')
    third.upper('This is californium')
    third.lower(' CALIFORniuM')
    new1.splitMonth()
    new1.first()
    new1.uni()
    new1.Pairs()

});
// router.get('/test-movie', function (req, res) {
//     res.send(`the movies are ${mov.xyz}`)
// })

module.exports = router;