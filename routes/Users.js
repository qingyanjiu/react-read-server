var express = require('express');
var router = express.Router();
var UserBusiness = require('../business/UserBusiness');

router.post('/regist', function(req, res, next) {
  // 获取前台页面传过来的参数
  // var param = req.query || req.params;
  var param = req.body;
  UserBusiness.regist(param,function(err,result){
    if(err){
      res.json({result:'error'});
      return;
    }
    if(result){
      if(result.result === "exist")
        res.json({result:'exist'});
      else
        res.json({result:'success'});
    }
  });
});

module.exports = router;