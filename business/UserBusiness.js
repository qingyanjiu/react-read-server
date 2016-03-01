var UserDao = require('../dao/UserDao');

module.exports = {
  
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
  }
  
};