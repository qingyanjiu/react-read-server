var bookSqlMapping = {
  insert:'INSERT INTO book_info(name, description,douban_id,image_url,plan_date,status,user_id,read_plan_month) VALUES(?,?,?,?,?,?,?,?)',
  delete: 'delete from book_info where id=? and user_id=?',
  queryById: 'select * from book_info where id=? and user_id=?',
  queryByDoubanId: 'select count(id) count from book_info where douban_id=? and user_id=? and read_plan_month=?',
  queryAll: 'select * from book_info where user_id=? and read_plan_month=? order by plan_date desc'
};

module.exports = bookSqlMapping;