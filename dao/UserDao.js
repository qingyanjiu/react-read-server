// 实现与MySQL交互
var db = require('./Database');
var UserSqlMapping = require('./UserSqlMapping');

module.exports = {
  
  checkName:function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        throw err;
      }

      // 建立连接，向表中插入值
      connection.query(UserSqlMapping.checkName, ['param'], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        
        callback(err,result);
      });
    });
  },
  
  addUser: function (param) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return "error";
      }

      // 建立连接，向表中插入值
      connection.query(UserSqlMapping.addUser, [param.username, param.password], function(err, result) {
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