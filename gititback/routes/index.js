var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GitItBack' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'GitItBack' });
});



module.exports = router;
