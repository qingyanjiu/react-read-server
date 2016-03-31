var BookTagSqlMapping = {
  //记录笔记
  addTag:"INSERT INTO book_tag(douban_id, user_id,page,tag_date) VALUES(?,?,?,?,?,?)",
  //查询最新书签
  queryBookNotes:"SELECT * FROM BOOK_TAG WHERE ID = (SELECT MAX(ID) ID FROM BOOK_TAG WHERE USER_ID=? AND DOUBAN_ID=?)"
  
};

module.exports = BookTagSqlMapping;