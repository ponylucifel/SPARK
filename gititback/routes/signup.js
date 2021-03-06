var express = require('express');
var router = express.Router();
var userModel = require('../models/userSchema');

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'GitItBack' });
});

router.get('/', function(req, res, next) {
    res.render('signup', { title: 'GIB Sign Up' });
});

router.post('/', function(req, res, next){
   var newUser = new userModel ({
	   first: req.body.first,
           last: req.body.last,
	   username: req.body.username,
    	   email: req.body.email,
       	   phone: req.body.phone,
           pass: req.body.pass,
   });
   newUser.save(function (err,data) {
	   if (err)
	   	console.log(err);
	   else
	   	console.log('Saved: ', data);
   });
    
   res.redirect('dashboard');
});

module.exports = router;
