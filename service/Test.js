var DoubanBookService = require('./DoubanBookService');


DoubanBookService.search(encodeURI("?q=心理学&fields=id,title,images"),(data)=>{
  process.stdout.write(data);
});