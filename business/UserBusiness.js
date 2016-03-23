var UserDao = require('../dao/UserDao');

module.exports = {
  //注册用户
  //@param param
  //param.username 用户名
  //param.password1 密码
  regist: function (param,callback) {
    //先检查用户名是否已有人使用
    UserDao.checkName(param,function(err,result){
      var ret;
      if(err){
        console.error("UserBusiness--regist--checkName--error");
        throw err;
        }
      if(result){
        //如果没有已注册的同名用户,则注册用户
        if(result[0].count === 0){
          UserDao.addUser(param,function(err,res){
            if(err){
              console.error("UserBusiness--regist--addUser--error");
              throw err;
            }
            ret = {"result":"success"};
            callback(err,ret);
          });
        }
        //如果已经被注册
        else{
          ret = {"result":"exist"};
          callback(err,ret);
        }

      }
    });
  },
  
  //登录系统
  //@param param
  //param.username 用户名
  //param.password 密码
  login: function (param,callback) {
    UserDao.getUser(param,function(err,result){
      var ret;
      if(err){
        console.error("UserBusiness--login--error");
        throw err;
        }
      if(result){
        callback(err,result);
      }
    });
  },
  
  
};