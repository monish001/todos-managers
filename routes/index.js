var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { sample_arg: 'todos manager' });
// });

/* GET add new todo page. */
router.get('/', function(req, res, next) {
  res.render('pages/addNew/addNew', { sample_arg: 'todos manager' });
});

module.exports = router;
