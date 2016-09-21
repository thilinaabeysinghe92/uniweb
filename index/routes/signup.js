var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('signuptype', { title: 'Uniweb' });
});


router.get('/studentsignup', function(req, res, next) {
  res.render('studentsignup', { title: 'Uniweb' });
});


router.post('/studentsignuppost', function(req, res, next) {
  var studentName = req.body.username;
  var uid = req.body.uid;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;

  console.log(studentName+" "+uid+" "+firstname+" "+lastname+" "+email+"");

  var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  // Connection URL
  var url = 'mongodb://localhost:27017/uniweb';

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.collection('students').insertOne({"studentName":studentName,"uid":uid, "firstname":firstname, "lastname":lastname, "email":email}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);
    db.close();
  });
    console.log("Insert successfully to database");
});





//  db.students.save({"studentName":studentName,"uid":uid, "firstname":firstname, "lastname":lastname, "email":email});
//  db.close();


});

router.get('/lecturesignup', function(req, res, next) {
  res.render('lecturesignup', { title: 'Uniweb' });
});

router.get('/nonacademicsignup', function(req, res, next) {
  res.render('nonacademicsignup', { title: 'Uniweb' });
});

module.exports = router;
