/**
* 数据库连接池模块
* 向外提供pool对象
*/
const mysql = require("mysql");

var pool = mysql.createPool({
  host: '127.0.0.1',    //数据库服务器地址
  user: 'root',         //数据库服务器登陆用户名
  password: '',
  database: 'wise',
  port: 3306,
  connectionLimit: 5    //连接池最大容量
});

module.exports = pool;
