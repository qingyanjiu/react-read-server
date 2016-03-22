// 实现与MySQL交互
var db = require('./Database');
var bookSqlMapping = require('./BookSqlMapping');


module.exports = {
  //添加书籍到计划中
  addBookPlan: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }
      // 获取前台页面传过来的参数
      var param = req.query || req.params;

      // 建立连接，向表中插入值
      connection.query(bookSqlMapping.insert, [param.name, param.describe], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
          jsonWrite(res,err);
          return;
        }
        if(err){
          console.error("addBookPlan--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  
};