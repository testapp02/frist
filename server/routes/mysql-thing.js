var db    = {};  
var mysql = require('mysql');  
var pool  = mysql.createPool({  
  connectionLimit : 10,
    host:"39.105.108.117",
    port:"3306",
    user:"xilong",
    password:"123456",
  database        : 'bs',
  timezone:"HH:MM"
});  
//获取连接  
db.getConnection = function(callback){  
    pool.getConnection(function(err, connection) {  
        if (err) {  
            callback(null);  
            return;  
        }  
        callback(connection);  
    });  
}   
module.exports = db; 