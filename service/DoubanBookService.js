'use strict';

var DoubanBookApi = require('./DoubanBookApi');
var HttpsRequest = require('./HttpsRequest');

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
};





