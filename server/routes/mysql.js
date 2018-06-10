var mysql=require("mysql");

var connect=mysql.createConnection({
    host:"39.105.108.117",
    port:"3306",
    user:"xilong",
    password:"123456",
    database:"airpurge"
});

module.exports=connect;