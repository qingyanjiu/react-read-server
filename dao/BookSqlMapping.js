var bookSqlMapping = {
  insert:'INSERT INTO book_info(name, description,douban_id,image_url,plan_date,status,user_id) VALUES(?,?,?,?,?,?,?)',
  delete: 'delete from book_info where id=? and user_id=?',
  queryById: 'select * from book_info where id=? and user_id=?',
  queryAll: 'select * from book_info where user_id=?'
};

module.exports = bookSqlMapping;