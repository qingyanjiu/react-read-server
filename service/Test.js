// var DoubanBookService = require('./DoubanBookService');


// DoubanBookService.getById('3948354',(data)=>{
//   process.stdout.write(data.title);
// });


var Date = require('./MyDate');

var myDate = new Date();
var date = myDate.pattern("yyyy-MM-dd") 
process.stdout.write(date);
