var express = require('express');
var router = express.Router();
var BookBusiness = require('../business/BookBusiness');

var DoubanBookService = require('../service/DoubanBookService');

//登录后跳转到主页面
router.get('/main', function(req, res, next) {
  res.render('main', { title: req.session.user_name + '的乐读' });
});



//显示搜索页面
router.get('/search', function(req, res, next) {
  res.render('searchBook',{ title: '搜索图书' })
});

//搜索图书
router.post('/search', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.body;
  DoubanBookService.search(param.text,param.page-1,(data)=>{
    if(data){
      res.json(data);
    }
  });
});

//点击某一本书查询图书详细信息
router.post('/detail', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.body;
  DoubanBookService.getById(param.id,(data)=>{
    if(data){
      res.json(data);
    }
  });
});

//显示阅读计划界面
router.get('/plan', function(req, res, next) {
  res.render('readPlan',{ title: '阅读计划' })
});

//添加到阅读列表
router.post('/addReadPlan', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.body;
  BookBusiness.addReadPlan(param,(data)=>{
    if(data){
      res.json(data);
    }
  });
});


module.exports = router;
