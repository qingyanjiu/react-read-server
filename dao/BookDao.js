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

      // 建立连接，向表中插入值
      connection.query(bookSqlMapping.insert, [param.name, param.description,param.douban_id,param.image_url,param.plan_date,param.status,param.user_id], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
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
  
  //查询计划中的书籍（按时间顺序）
  queryAllBookPlans: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }

      // 建立连接，向表中插入值
      connection.query(bookSqlMapping.queryAll, [param.user_id], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
          return;
        }
        if(err){
          console.error("queryAllBookPlans--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  //通过豆瓣id查询某本书是否已经加入了阅读计划
  checkBookInPlan: function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        return;
      }

      // 建立连接，向表中插入值
      connection.query(bookSqlMapping.queryByDoubanId, [param.douban_id,param.user_id], function(err, result) {
        if(err){
          console.error(myDate.toLocaleString()+"---"+err);
          return;
        }
        if(err){
          console.error("checkBookInPlan--"+myDate.toLocaleString()+"---"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
};