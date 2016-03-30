var ReadHistorySqlMapping = {
  //查询已经读完几遍 如果为0说明还没读完过
  checkTimes:"SELECT COUNT(ID) AS times FROM read_history WHERE USER_ID=? AND DOUBAN_ID=? AND TAG='1'",
  //开始读新的一遍(新增一条阅读历史记录)
  addHistory:"INSERT INTO read_history(douban_id, user_id,read_time,start_date,end_date) VALUES(?,?,?,?,?)",
  //查询书籍最新的阅读历史记录的状态 如果是0说明最近的一遍读完了 否则还没读完
  checkCurrentComplete:"SELECT TAG FROM user_info WHERE ID = (SELECT MAX(ID) ID FROM read_history WHERE USER_ID=? AND DOUBAN_ID=?)",
  
};

module.exports = ReadHistorySqlMapping;