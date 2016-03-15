var express = require('express');
var router = express.Router();
var bookDao = require('../dao/BookDao');

//登录后跳转到主页面
router.get('/main', function(req, res, next) {
  res.render('main', { title: req.session.user_name + '的乐读' });
});




router.get('/search', function(req, res, next) {
  res.render('searchBook',{ title: '搜索图书' })
});

router.post('/search', function(req, res, next) {
  
});


module.exports = router;
