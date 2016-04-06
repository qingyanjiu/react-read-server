var ReadHistoryDao = require('../dao/ReadHistoryDao');

module.exports = {
  //
  //开始一遍阅读
  //
  startRead: function (param,callback) {
    //先检查最近一遍是否已经读完了
    ReadHistoryDao.checkCurrentComplete(param,function(err,result){
      var ret;
      if(err){
        console.error("ReadingBusiness--startRead--checkCurrentComplete--error");
        throw err;
        }
      //如果有返回记录，说明已经开始读过
      if(result.length > 0){
        //如果最近的一次阅读还没有读完,返回提示还没有读完
        if(result[0].tag === '0'){
          ret = {"result":"notcomplete"};
          callback(err,ret);
        }
        //如果最近的一次阅读已经读完，新增一条历史记录
        else if(result[0].tag === '1'){
          //新增的阅读次数+1
          param.read_time = result[0].read_time + 1;
          ReadHistoryDao.addReadHistory(param,function(err,res){
            if(err){
              console.error("ReadingBusiness--startRead--ReadHistoryDao--error");
              throw err;
            }
            ret = {"result":"success"};
            callback(err,ret);
          });
        }
      }
      //否则说明一次都没有开始读，也新增一条历史纪录
      else{
        //阅读次数：1
        param.read_time = 1;
        ReadHistoryDao.addReadHistory(param,function(err,res){
            if(err){
              console.error("ReadingBusiness--startRead--ReadHistoryDao--error");
              throw err;
            }
            ret = {"result":"success"};
            callback(err,ret);
        });
      }
    });
  },
  
  //
  //完成这一遍阅读
  //
  completeRead: function (param,callback) {
    ReadHistoryDao.checkCurrentComplete(param,function(err,result){
      var ret;
      if(err){
        console.error("ReadingBusiness--completeRead--checkCurrentComplete--error");
        throw err;
        }
      if(result){
        //如果最近的一条阅读历史已经结束了，说明还没有开始新的阅读，不能结束阅读
        if(result[0].tag === '1'){
          ret = {"result":"notstart"};
          callback(err,ret);
        }
        //如果当前这遍正在读，可以结束阅读
        else if(result[0].tag === '0'){
          //id传入
          param.id = result[0].id;
          ReadHistoryDao.completeRead(param,function(err,res){
            if(err){
              console.error("ReadingBusiness--completeRead--completeRead--error");
              throw err;
            }
            ret = {"result":"success"};
            callback(err,ret);
        });
        }
        callback(err,result);
      }
    });
  },
  
  
  //
  //查看最新一遍阅读的历史信息
  //
  getCurrentReadInfo: function (param,callback) {
    ReadHistoryDao.checkCurrentComplete(param,function(err,result){
      var ret;
      if(err){
        console.error("ReadingBusiness--completeRead--checkCurrentComplete--error");
        throw err;
        }
      callback(err,result);
    });
  },
  
};