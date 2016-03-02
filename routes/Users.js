var express = require('express');
var router = express.Router();
var UserBusiness = require('../business/UserBusiness');

router.post('/regist', function(req, res, next) {
  // 获取前台页面传过来的参数
  // var param = req.query || req.params;
  var param = req.body;
  UserBusiness.regist(param,function(err,result){
    if(err){
      console.error("UserRouter--post--regist--error");
      throw err;
    }
    if(result){
      if(result.result === "exist")
        res.json({result:'exist'});
      else
        res.json({result:'success'});
    }
  });
});

router.post('/login', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.body;
  UserBusiness.login(param,function(err,result){
    if(err){
      console.error("UserRouter--post--login--error");
      throw err;
    }
    if(result){
      if(result.result === "fail")
        res.json({result:'fail'});
      else
        res.json({result:'success'});
    }
  });
});

module.exports = router;