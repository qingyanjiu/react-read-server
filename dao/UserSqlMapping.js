var UserSqlMapping = {
  checkName:'SELECT COUNT(USER_ID) AS count FROM user_info WHERE USER_NAME=?',
  addUser:'INSERT INTO user_info(user_name, password) VALUES(?,?)',
  getUser:'SELECT * FROM user_info WHERE USER_NAME=? AND PASSWORD=?',
};

module.exports = UserSqlMapping;