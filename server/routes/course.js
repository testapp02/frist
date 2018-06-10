var express = require('express');
var router = express.Router();
// var multer  = require('multer');
var md5=require("./md5");
var mysql=require("./mysql");
// var xlsx=require("node-xlsx");

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now()+"-"+file.originalname  )
//     }
// })

// var upload = multer({ storage: storage })


/* GET home page. */
// router.get('/signStu', function(req, res, next) {
//     var name=req.query.name;
//     var cid=req.query.cid;
//     var pass=md5("123456");
//
//     mysql.query(`insert into stu (name,pass,cid) values ('${name}','${pass}',${cid})`,function (err,result) {
//         if(result.affectedRows>0){
//             res.end("ok")
//         }else{
//             res.end("err");
//         }
//     })
// });

// router.post("/upload",upload.single("aa"),function (req,res) {
//
//
//
//     var datas=(xlsx.parse(req.file.path))[0].data;
//
//     mysql.query("select * from classes",function (err,result) {
//
//         var json={};
//         for(var i=0;i<result.length;i++){
//             json[result[i].name]=result[i].id;
//         }
//         json={ 'w1710': '1', 'mui1710': '2', 'vui1710': '3' }
//
//         var arr=[];
//         for(var i=1;i<datas.length;i++){
//             var arr1=[];
//             arr1.push(datas[i][0]);
//             arr1.push(md5("123456"));
//             arr1.push(json[datas[i][1]]);
//             arr.push(arr1);
//         }
//
//         mysql.query("insert into stu (name,pass,cid) values ?",[arr],function (err,result) {
//             if(!err){
//                 res.end("ok")
//             }else{
//                 res.end("err");
//             }
//         })
//
//     })
//
//
// })

// router.get("/selectAll",function (req,res) {
//     var like=req.query.like?"where stu.name like '%"+req.query.like+"%'":''
//     mysql.query("select * from stu "+like,function (err,result) {
//         if(err){
//             res.end(JSON.stringify({message:"err"}))
//
//         }else{
//             res.end(Math.ceil(result.length/10).toString());
//         }
//     })
// })



router.get("/select",function (req,res) {
    // var start=req.query.page*10;
    // var like=req.query.like?"and stu.name like '%"+req.query.like+"%'":''
    var sql="select * from ap_healthcourse";
    mysql.query(sql,function (err,result) {
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
