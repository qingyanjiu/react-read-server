// 实现与MySQL交互
var db = require('./Database');
var UserSqlMapping = require('./UserSqlMapping');
var md5 = require('md5');


module.exports = {
  
  //判断用户名是否在用户表中已经存在
  checkName:function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        throw err;
      }
      // 建立连接，向表中插入值
      connection.query(UserSqlMapping.checkName, [param.username], function(err, result) {
        if(err){
          console.error("checkName--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  //新增用户
  addUser: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        throw err;
      }

      // 建立连接，向表中插入值
      connection.query(UserSqlMapping.addUser, [param.username, md5(param.password)], function(err, result) {
        if(err){
          console.error("addUser--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  //通过用户名和密码查询用户信息
  getUser: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.log(myDate.toLocaleString()+"---"+err);
        throw err;
      }

      // 建立连接，查询用户
      connection.query(UserSqlMapping.getUser, [param.username, md5(param.password)], function(err, result) {
        if(err){
          console.log("getUser--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  }
  
};