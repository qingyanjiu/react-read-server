var BookNoteDao = require('../dao/BookNoteDao');

module.exports = {
  //添加读书笔记
  addNote: function (param,callback) {
    BookNoteDao.addNote(param,function(err,result){
      if(err){
        console.error("BookNoteBusiness--addNote--error");
        throw err;
        }
      if(result){
        callback(err,{"result":"success"});
      }
    });
  },
  
  //查询笔记列表
  queryNotes: function (param,callback) {
    BookNoteDao.queryNotes(param,function(err,result){
      if(err){
        console.error("BookNoteBusiness--queryNotes--error");
        throw err;
        }
      if(result){
        callback(err,result);
      }
    });
  },
};