//豆瓣图书的api地址
//host是域名
//version是api的版本号
//其他的是各个api的path,每个api后面的//:字段 表示直接拼接变量
var DoubanBookApi = {
  hostUrl:'api.douban.com',
  version:'/v2/',
  
  getById:'book/', //:id
  getByIsbn:'book/isbn/', //:name

};

module.exports = DoubanBookApi;