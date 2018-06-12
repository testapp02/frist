var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

router.get("/select",function (req,res){
    mysql.query("select * from ap_order",function (err,result) {
        console.log("1");
        if(err){
            res.end(JSON.stringify({message:"err"}))
        }else{
            var rows = result;
            rows.sort(function(a,b){
                return Date.parse(a.crt_time) - Date.parse(b.crt_time);//时间正序
            });
            res.end(JSON.stringify(rows));
        }
    })
});
module.exports = router;