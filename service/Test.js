var DoubanBookService = require('./DoubanBookService');


DoubanBookService.getById('3948354',(data)=>{
  process.stdout.write(data.title);
});