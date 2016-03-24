var BookDao = require('../dao/BookDao');

module.exports = {
  //将书添加到阅读计划中
  addReadPlan: function (param,callback) {
    //先检查该书是否已经在阅读列表中
    BookDao.checkBookInPlan(param,function(err,result){
      var ret;
      if(err){
        console.error("BookBusiness--addReadPlan--checkBookInPlan--error");
        throw err;
        }
      if(result){
        //如果没有加入阅读计划，则加入计划
        if(result[0].count === 0){
          BookDao.addBookPlan(param,function(err,res){
            if(err){
              console.error("BookBusiness--addReadPlan--addReadPlan--error");
              throw err;
            }
            ret = {"result":"success"};
            callback(err,ret);
          });
        }
        //如果已经在阅读计划中
        else{
          ret = {"result":"exist"};
          callback(err,ret);
        }

      }
    });
  },
  
  //查询所有阅读计划中的书籍
  queryAllBookPlans: function (param,callback) {
    BookDao.queryAllBookPlans(param,function(err,result){
      var ret;
      if(err){
        console.error("BookBusiness--queryAllBookPlans--error");
        throw err;
        }
      if(result){
        callback(err,result);
      }
    });
  },
  
  
};