var express = require('express');
var router = express.Router();
var bookDao = require('../dao/BookDao');

//登录后跳转到主页面
router.get('/main', function(req, res, next) {
  res.render('main', { title: req.session.user_name + '的乐读' });
});




router.get('/addBook', function(req, res, next) {
  bookDao.add(req, res, next);
});

module.exports = router;
