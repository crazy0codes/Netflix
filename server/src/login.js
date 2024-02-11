const express = require('express');
const olderUser = require('./db/dbconnection');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /login route.');
});


router.post('/', function(req, res) {
    const data = olderUser();
    data.then((result) => {
        res.send(JSON.stringify(result));
    });
});


module.exports = router;