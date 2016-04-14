var express = require('express');
var router = express.Router();
var UserBusiness = require('../business/UserBusiness');

//用户注册
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

//用户登录，暂时用不到
// router.get('/login', function(req, res, next) {
//   res.render('login', 
// 		{
// 	    title: '用户登录'
// 		});
// });

//用户登录
router.post('/login', function(req, res, next) {
  // 获取前台页面传过来的参数
  var param = req.body;
  UserBusiness.login(param,function(err,result){
    if(err){
      console.error("UserRouter--post--login--error");
      throw err;
    }
    if(result){
      //登录成功
      if(result.length !== 0){
        //用户session写入
        req.session.user_name = result[0].user_name;
        req.session.user_id = result[0].user_id;
        //同步到sessionstore里
        req.session.save();
        console.log(req.session.user_name+"----"+req.session.user_id+"-------"+param.type);
        
        
        
        /*从app获取sessionstore(用于客户端sessionid)
         */
        // var sessionStore = req.app.get('store');
        // //用sessionid查询session
        // sessionStore.get(req.sessionID, function(err,session){
        //   if(err || !session){
            
        //   }
        //   console.log(session);
        //   if(session.user_id){
        //     console.log(session.user_id);
        //   }else{
            
        //   }
        // })
        /*从app获取sessionstore
         */
         
        //如果有登录类型，说明是手机端登录，那么登录玩要返回sessionid
        if(param.type)
          res.json({result:'success',sessionid:req.sessionID})
        else
          res.json({result:'success'});
      }
      //登录失败
      else{
        res.json({result:'fail'});
      }
    }
  });
});

  
  //获取当前登录用户信息
router.post('/getUserInSession', function(req, res, next) {
      var session = req.session;
      
      //用户session存在
      if(session.user_id){
        res.json({userInfo:{user_id:session.user_id,user_name:session.user_name}});
        console.log("---------------"+userInfo.user_name);
      }
});

module.exports = router;