var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    const users = 
    [
        {
            "name": "imran",
            "email": "imran",
            "password": "imran"
        },
        {
            "name": "imran",
            "email": "imran",
            "password": "imran"
        },
        {
            "name": "imran",
            "email": "imran",
            "password": "imran"
        }
    ]
    res.send(users);
});

module.exports = router;
