var express = require('express');
var router = express.Router();
var bookDao = require('../dao/BookDao');

var DoubanBookService = require('../service/DoubanBookService');

//登录后跳转到主页面
router.get('/main', function(req, res, next) {
  res.render('main', { title: req.session.user_name + '的乐读' });
});




router.get('/search', function(req, res, next) {
  res.render('searchBook',{ title: '搜索图书' })
});

router.post('/search', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.body;
  DoubanBookService.search(param.text,0,(data)=>{
    if(data){
      // console.log(JSON.parse(data));
      res.json(JSON.parse(data));
    }
  });
});


module.exports = router;
