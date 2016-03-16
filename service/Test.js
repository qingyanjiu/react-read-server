var DoubanBookService = require('./DoubanBookService');


DoubanBookService.getById('11976406',(data)=>{
  process.stdout.write(data.title);
});