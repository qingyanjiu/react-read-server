// 实现与MySQL交互
var db = require('./Database');
var BookNoteSqlMapping = require('./BookNoteSqlMapping');


module.exports = {
  
  //添加读书笔记
  addNote:function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        throw err;
      }
      // 建立连接，向表中插入值
      connection.query(BookNoteSqlMapping.addNote, [param.douban_id,param.user_id,param.page,param.content,param.note,param.note_date], function(err, result) {
        if(err){
          console.error("addNote--"+myDate.toLocaleString()+"-addNote--"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
  //查询笔记列表
  queryNotes:function (param,callback) {
    db.pool.getConnection(function(err, connection) {
      var myDate = new Date();
      if(err){
        console.error(myDate.toLocaleString()+"---"+err);
        throw err;
      }
      // 建立连接，向表中插入值
      connection.query(BookNoteSqlMapping.queryNotes, [param.douban_id,param.user_id], function(err, result) {
        if(err){
          console.error("queryNotes--"+myDate.toLocaleString()+"-queryNotes--"+err);
          throw err;
        }
        // 释放连接 
        connection.release();
        callback(err,result);
      });
    });
  },
  
};