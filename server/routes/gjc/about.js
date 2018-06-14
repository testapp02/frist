var express = require('express');
var router = express.Router();
// var multer  = require('multer');
var md5=require("../md5");
var mysql=require("../mysql");



router.get("/select",function (req,res) {
    // var start=req.query.page*10;
    // var like=req.query.like?"and stu.name like '%"+req.query.like+"%'":''
    var sql="select * from ap_map";
    mysql.query(sql,function (err,result) {
        if(err){
            res.end(JSON.stringify({message:"err"}))
        }else{
            res.end(JSON.stringify(result));
        }
    })
});
// router.get("/del/:id",function (req,res) {
//     var id=req.params.id;
//     mysql.query("delete from ap_healthcourse where id="+id,function (err,result) {
//         if(result.affectedRows>0){
//             res.end("ok")
//         }
//     })
// });
// router.get("/EditCourse/:_key",function (req,res) {
//     var id=req.params.;
//     mysql.query("select * from ap_healthcourse where id="+id,function (err,result) {
//         res.end(JSON.stringify(result[0]));
//     })
// });
// router.get("/editCon",function(req,res){
//     var id=req.query.id;
//     var title=req.query.title;
//     var remark=req.query.remark;
//     var res_type=req.query.res_type;
//     var res_path=req.query.res_path;
//     var icon=req.query.icon;
//     var content=req.query.content;
//     mysql.getConnection(function(con){
//         con.query("update ap_healthcourse set title=?,remark=?,res_type=?,res_path=?,icon=?,content=? where id=?",[title,remark,res_type,res_path,icon,content,id],function(err,result){
//             chuli(err,result,res);
//         });
//     });
// })
module.exports = router;
