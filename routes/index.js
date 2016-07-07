var express = require('express');
var router = express.Router();

/* GET todo list page. */
router.get('/', function(req, res, next) {
  res.render('pages/todoList/todoList', { sample_arg: 'todos manager' });
});

/*GET add new todo page*/
router.get('/addNew', function(req, res, next) {
  res.render('pages/addNew/addNew', { sample_arg: 'todos manager' });
});

module.exports = router;
