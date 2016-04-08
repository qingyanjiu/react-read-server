var express = require('express');
var router = express.Router();
var BookBusiness = require('../business/BookBusiness');
var ReadingBusiness = require('../business/ReadingBusiness');
var BookNoteBusiness = require('../business/BookNoteBusiness');

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
  var date = myDate.pattern("yyyy-MM-dd HH:mm:ss");
  var year = myDate.pattern("yyyy-");
  var month = req.body.month < 10 ? "0"+req.body.month : req.body.month;
  
  // 获取前台页面传过来的参数,并设置name、加入日期、状态、用户id、image_url、douban_id等信息
  var param = req.body.callData;
  param.name = param.title;
  // param.description = param.summary;
  param.douban_id = param.id;
  param.image_url = param.images.large;
  param.plan_date = date;
  param.user_id = req.session.user_id;
  param.status = '0';//刚添加到阅读列表的状态
  param.read_plan_month = year + month;
  
  
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


//获取本月阅读计划信息
router.post('/queryReadPlan', function(req, res, next) {
  var myDate = new MyDate();
  var todayMonth = myDate.pattern("yyyy-MM");
  var param = req.session;
  param.read_plan_month = todayMonth;
  
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

//获取本书阅读情况
router.post('/getReadInfo', function(req, res, next) {
  var param = req.body;
  var userId = req.session.user_id;
  param.user_id = userId;
  
  ReadingBusiness.getCurrentReadInfo(param,(err,data)=>{
    if(err){
      console.error("BookRouter--post--getReadInfo--error");
      throw err;
    }
    if(data){
      res.json(data);
    }
  });
});

//添加到阅读列表
router.post('/startRead', function(req, res, next) {
  var param = req.body;
  var myDate = new MyDate();
  var today = myDate.pattern("yyyy-MM-dd");
  var userId = req.session.user_id;
  param.start_date = today;
  param.user_id = userId;
  param.tag = '0';
  
  ReadingBusiness.startRead(param,(err,data)=>{
    if(err){
      console.error("BookRouter--post--startRead--error");
      throw err;
    }
    if(data){
      res.json(data);
    }
  });
});


//结束阅读
router.post('/completeRead', function(req, res, next) {
  var param = req.body;
  var myDate = new MyDate();
  var today = myDate.pattern("yyyy-MM-dd");
  var userId = req.session.user_id;
  param.start_date = today;
  param.user_id = userId;
  param.tag = '0';
  
  ReadingBusiness.completeRead(param,(err,data)=>{
    if(err){
      console.error("BookRouter--post--completeRead--error");
      throw err;
    }
    if(data){
      res.json(data);
    }
  });
});


//添加阅读笔记
router.post('/addNote', function(req, res, next) {
  var param = req.body;
  var myDate = new MyDate();
  var today = myDate.pattern("yyyy-MM-dd HH:mm:ss");
  var userId = req.session.user_id;
  param.note_date = today;
  param.user_id = userId;
  BookNoteBusiness.addNote(param,(err,data)=>{
    if(err){
      console.error("BookRouter--post--addNote--error");
      throw err;
    }
    if(data){
      if(data.result === "success")
        res.json({result:'success'});
    }
  });
});

module.exports = router;
