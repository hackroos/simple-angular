const pool = require('./dbpool');   //使用连接池模块获取连接
//const qs = require('querystring');  //使用qs模块解析POST数据

module.exports = {
  homePage: (req, res) =>{
    pool.getConnection((err, conn)=>{

      conn.query('SELECT * FROM c_news',(err, result)=>{
        const output=[];
        const arr = [];
        //console.log(result);
        output[0] = {
          id: result[0].cid,
          name: result[0].cname,
          new: result[0].cnew,
          pic: result[0].cpic
        }

        conn.query("SELECT * FROM c_news_detail WHERE id = (SELECT contentId FROM c_news)",(err,results)=>{
          for(var i = 0; i < results.length; i++){
            arr[i] = {
              id: results[i].id,
              date: results[i].date,
              month: results[i].month,
              year: results[i].year,
              detail: results[i].detail
            }
          }
          output[1] = arr;

          res.json(output);
          conn.release();
        });
      });
    });
  }
}
