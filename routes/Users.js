var express = require('express');
var router = express.Router();
var UserBusiness = require('../business/UserBusiness');

router.get('/regist', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.query || req.params;
  var ret = UserBusiness.regist(param);
  
});

module.exports = router;