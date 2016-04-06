var ReadHistorySqlMapping = {
  //查询已经读完几遍 如果为0说明还没读完过
  checkTimes:"SELECT COUNT(id) AS times FROM read_history WHERE user_id=? AND douban_id=?",
  //查询书籍最新的阅读历史记录的状态 如果是1说明最近的一遍读完了 否则还没读完
  checkCurrentComplete:"SELECT * FROM read_history WHERE id = (SELECT MAX(id) FROM read_history WHERE user_id=? AND douban_id=?)",
  //开始读新的一遍(新增一条阅读历史记录)
  addHistory:"INSERT INTO read_history(user_id,douban_id, read_time,start_date,end_date) VALUES(?,?,?,?,?)",
  
  //完成阅读一本书 tag置为1
  completeRead:"UPDATE read_history SET tag='1' WHERE id=?" 
};

module.exports = ReadHistorySqlMapping;