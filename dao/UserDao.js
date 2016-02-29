// 实现与MySQL交互
var db = require('./Database');
var UserSqlMapping = require('./UserSqlMapping');

module.exports = {
  
  addUser: function (param) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return "error";
      }

      // 建立连接，向表中插入值
      connection.query(bookSqlMapping.insert, [param.username, param.password], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
          return "error";
        }
        if(result) {
          return "success";
        }
        // 释放连接 
        connection.release();
      });
    });
  },
  
};