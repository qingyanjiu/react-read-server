// MySQL数据库联接配置
module.exports = {
  mysql: {
    host: 'mysql.t0.daoapp.io', 
    user: 'root',
    password: '123',
    database:'book', 
    port: 61923,
    connectionLimit: 10,
    supportBigNumbers: true
  }
};