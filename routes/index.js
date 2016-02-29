var express = require('express');
var router  = express.Router();
var path    = require('path');

/* GET our single 'home' page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET resume in PDF form */
router.get('/resume', function(req, res, next) {
  res.json({"resume": "coming-soon"});
});

module.exports = router;