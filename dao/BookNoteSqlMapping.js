var BookNoteSqlMapping = {
  //记录笔记
  addNote:"INSERT INTO book_note(douban_id, user_id,page,content,note,note_date) VALUES(?,?,?,?,?,?)",
  //查询笔记列表
  queryBookNotes:"SELECT * FROM BOOK_NOTE WHERE USER_ID=? AND DOUBAN_ID=? ORDER BY PAGE ASC"
  
};

module.exports = BookNoteSqlMapping;