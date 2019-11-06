var express = require('express');
var router = express.Router();

router.use(require('./product'));
router.use(require('./user'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
