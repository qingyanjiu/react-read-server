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


// module.exports = {
//   mysql: {
//     host: '10.10.11.174', 
//     user: 'uBO2hKbvYlxpWuon',
//     password: 'pDEM5ATbtBZRNpk0F',
//     database:'7WZIbQEn8xNe4SMt', 
//     port: 3306,
//     connectionLimit: 10,
//     supportBigNumbers: true
//   }
// };

