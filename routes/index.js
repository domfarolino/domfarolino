var express = require('express');
var router  = express.Router();
var path    = require('path');

/* GET our single 'home' page. */
router.get('/', function(req, res, next) {
  // Send plain html view for angular2 app
  res.sendFile(path.join(__dirname, '../', 'index.html'));
  //res.render('index');
});

/* GET resume in PDF form */
router.get('/resume', function(req, res, next) {
  res.json({"resume": "coming-soon"});
});

// This supports deep linking with the Angular 2 HTML 5 router
router.all("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
  //res.render('index');
});

module.exports = router;