var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('signuptype', { title: 'Uniweb' });
});


router.get('/studentsignup', function(req, res, next) {
  res.render('studentsignup', { title: 'Uniweb' });
});

router.get('/lecturesignup', function(req, res, next) {
  res.render('lecturesignup', { title: 'Uniweb' });
});

router.get('/nonacademicsignup', function(req, res, next) {
  res.render('nonacademicsignup', { title: 'Uniweb' });
});

module.exports = router;
