var express = require('express');
var router = express.Router();
var md5=require("./md5");
var mysql=require("./mysql");




router.get("/select",function (req,res) {
    // var start=req.query.page*10;
    // var like=req.query.like?"and stu.name like '%"+req.query.like+"%'":''
    var sql="select * from ap_healthcourse";
    mysql.query(sql,function (err,result) {
    	console.log(err);
        if(err){
            res.end(JSON.stringify({message:"err"}))
        }else{
            // var rows = result;
            // rows.sort(function(a,b){
            //     return Date.parse(a.crt_time) - Date.parse(b.crt_time);//时间正序
            // });
            res.end(JSON.stringify(result));
        }
    })
});
router.get("/del/:id",function (req,res) {
    var id=req.params.id;
    mysql.query("delete from ap_healthcourse where id="+id,function (err,result) {
        if(result.affectedRows>0){
            res.end("ok")
        }
    })
});
router.get("/EditCourse/:id",function (req,res) {
    var id=req.params.id;
    mysql.query("select * from ap_healthcourse where id="+id,function (err,result) {
        res.end(JSON.stringify(result[0]));
    })
});
router.post("/editCon", function(req, res, next) {
    var id=req.params.id;
    var title=req.body.title;
    var remark=req.body.remark;
    var res_path=req.body.res_path;
    var icon=req.body.icon;
    var content=req.body.content;

    console.log(title,remake,icon,content);
    var sql=`updata ap_healthcourse set title='title' and content='content' where id=`+id;

    mysql.query(sql,function (err,result) {
        if(err){
            res.end("err");
        }else{
            // if(result.affectedRows>0){
                res.end("ok");
            // }else{
            //     res.end("err");
            // }
           alert(result)
        }
    })
});
module.exports = router;
