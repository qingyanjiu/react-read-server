var BookCommentSqlMapping = {
  //添加书评
  addComment:"INSERT INTO book_comment(douban_id, user_id,comment_content,comment_date) VALUES(?,?,?,?,?,?)",
  //查询书评
  queryBookComments:"SELECT * FROM BOOK_COMMENT WHERE USER_ID=? AND DOUBAN_ID=? ORDER BY comment_date DESC"
  
};

module.exports = BookCommentSqlMapping;