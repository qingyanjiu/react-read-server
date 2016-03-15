'use strict';

var DoubanBookApi = require('./DoubanBookApi');
var HttpsRequest = require('./HttpsRequest');

//默认的分页每页数量
var pageCount = 10;

module.exports = {
  //通过isbn号获取书籍信息 
  getByIsbn: function (isbn,callback) {
    let options = {
      hostname: DoubanBookApi.hostUrl,
      port: 443,
      path: DoubanBookApi.version + DoubanBookApi.getByIsbn + isbn,
      method: 'GET',
    };
    
    HttpsRequest.httpsRequest(options,(data) => {
      console.log('DoubanBookApi--getByIsbn');
      process.stdout.write(data);
    });
  },
  
  //搜索图书
  //参数	意义	备注
  // q	查询关键字	q和tag必传其一
  // tag	查询的tag	q和tag必传其一
  // start	取结果的offset	默认为0
  // count	取结果的条数	默认为20，最大为100
  search:function(q,start,callback){
    var qString = encodeURI("?q="+q+"&fields=id,title,images&start="+start+"&count="+pageCount);
    
    let options = {
      hostname: DoubanBookApi.hostUrl,
      port: 443,
      path: DoubanBookApi.version + DoubanBookApi.search + qString,
      method: 'GET',
    };
    
    HttpsRequest.httpsRequest(options,(data) => {
      console.log('DoubanBookApi--search');
      if(data){
        callback(data);
      }
    });
  }
  
};





