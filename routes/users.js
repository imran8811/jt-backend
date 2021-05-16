var express = require('express');
var router = express.Router();
const User = require('../models/Users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send(req.body);
// });

router.post('/', function(req, res, next) {
  const data = new User({
    username : req.body.username,
    email : req.body.email,
    password: req.body.password
  })
  data.save().then(data => res.json(data)).catch(err => res.json(err));
});

module.exports = router;