var UserDao = require('../dao/UserDao');

module.exports = {
  
  regist: function (param) {
    UserDao.checkName(param,function(err,result){
      if(err){
        console.error("error");
        throw err;
      }
      if(result){
        console.log(result[0].count);
      }
    });
  },
  
};