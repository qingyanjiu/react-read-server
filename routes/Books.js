var express = require('express');
var router = express.Router();
var BookBusiness = require('../business/BookBusiness');

var DoubanBookService = require('../service/DoubanBookService');

var MyDate = require('../service/MyDate');

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
  var myDate = new MyDate();
  var date = myDate.pattern("yyyy-MM-dd") 
  
  // 获取前台页面传过来的参数,并设置name、加入日期、状态、用户id、image_url、douban_id等信息
  var param = req.body;
  param.name = param.title;
  param.description = param.summary;
  param.douban_id = param.id;
  param.image_url = param.images.large;
  param.plan_date = date;
  param.user_id = req.session.user_id;
  param.status = '0';//刚添加到阅读列表的状态
  
  BookBusiness.addReadPlan(param,(err,data)=>{
    if(err){
      console.error("BookRouter--post--addReadPlan--error");
      throw err;
    }
    if(data){
      res.json(data);
    }
  });
});


//添加到阅读列表
router.post('/queryReadPlan', function(req, res, next) {
  
  var param = req.session;
  
  BookBusiness.queryAllBookPlans(param,(err,data)=>{
    if(err){
      console.error("BookRouter--post--queryReadPlan--error");
      throw err;
    }
    if(data){
      res.json(data);
    }
  });
});


module.exports = router;
