// 阅读历史功能的数据操作
var db = require('./Database');
var readHistroySqlMapping = require('./ReadHistorySqlMapping');


module.exports = {
  //查询当前书籍正在阅读第几次
  checkReadTimes: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }

      // 查询已存在的阅读历史条数
      connection.query(readHistroySqlMapping.checkTimes, [param.user_id,param.douban_id], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"-checkReadTimes--"+err);
          return;
        }
        if(err){
          console.error("checkReadTimes--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  //查询最新一遍是否已经读完
  checkCurrentComplete: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }

      //查询书籍最新的阅读历史记录的状态 如果是1说明最近的一遍读完了 否则还没读完
      connection.query(readHistroySqlMapping.checkCurrentComplete, [param.user_id,param.douban_id], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
          return;
        }
        if(err){
          console.error("checkCurrentComplete--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  
  //新增阅读历史记录
  addReadHistory: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }

      // 查询已存在的阅读历史条数
      connection.query(readHistroySqlMapping.addHistory, [param.user_id,param.douban_id,param.read_time,param.start_date,param.end_date], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"-addReadHistory--"+err);
          return;
        }
        if(err){
          console.error("addReadHistory--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  
  //完成当前这一遍阅读
  completeReadHistory: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }

      // 查询已存在的阅读历史条数
      connection.query(readHistroySqlMapping.completeRead, [param.id], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"-completeReadHistory--"+err);
          return;
        }
        if(err){
          console.error("completeReadHistory--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
};