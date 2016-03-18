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
      // process.stdout.write(data);
    });
  },
  
  //通过id获取书籍信息 
  getById: function (id,callback) {
    let options = {
      hostname: DoubanBookApi.hostUrl,
      port: 443,
      path: DoubanBookApi.version + DoubanBookApi.getById + id + "?fields=id,title,images,summary,author,rating",
      method: 'GET',
    };
    
    HttpsRequest.httpsRequest(options,(data) => {
      console.log('DoubanBookApi--getById');
      if(data){
        var d = JSON.parse(data);
        callback(d);
      }
    });
  },
  
  //搜索图书
  //参数	意义	备注
  // q	查询关键字	q和tag必传其一
  // tag	查询的tag	q和tag必传其一
  // start	取结果的offset	默认为0
  // count	取结果的条数	默认为20，最大为100
  search:function(tag,start,callback){
    var qString = encodeURI("?tag="+tag+"&fields=id,title,images,author&start="+start*pageCount+"&count="+pageCount);
    
    let options = {
      hostname: DoubanBookApi.hostUrl,
      port: 443,
      path: DoubanBookApi.version + DoubanBookApi.search + qString,
      method: 'GET',
    };
    
    HttpsRequest.httpsRequest(options,(data) => {
      console.log('DoubanBookApi--search');
      if(data){
        var d = JSON.parse(data);
        //将查询字符串也放到json传回来
        d.text = tag;
        // console.log(d);
        callback(d);
      }
    });
  }
  
};





