var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user get');
});

router.post('/', function(req, res, next) {
  res.send('respond with a user post');
});

router.post('/alta', function(req, res, next) {
  res.send('respond with a user post alta');
});

module.exports = router;
