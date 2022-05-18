var express = require('express');
var router = express.Router();
var mysql = require('mysql')

//创建一个数据库连接池
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'sys'
})

//连接
connection.connect(function (err) {
  if (err) {
    console.log('error')
  }
  console.log('connect success!')
});

// 查询数据
var obj = null
connection.query('select * from website', function (err, row) {
  if (err) {
    console.log('query error!')
  } else {
    console.log(row)
    obj = row
  }
  connection.end()//关闭连接
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
  res.json(obj)
});

module.exports = router;
