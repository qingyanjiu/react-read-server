var DoubanBookService = require('./DoubanBookService');


DoubanBookService.search('心理学',0,(data)=>{
  process.stdout.write(data);
});