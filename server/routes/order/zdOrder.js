var express = require('express');
var router = express.Router();
var mysql = require("../mysql.js");
var chuli1 = require("../chuli1.js");
var chuli = require("../chuli.js");

/*分页查询所有条数*/
router.get('/selAll', function(req, res) {
	var like = "";
	if(req.query.id) {
		like = ` and ap_order.id like '%${req.query.id}%'`;
	}
	if(req.query.nickname) {
		like = like + ` and ap_user.nickname like '%${req.query.nickname}%'`;
	}
	if(req.query.starttime) {
		like = like + ` and ap_order.crt_time>${req.query.starttime}`;
	}
	if(req.query.endtime) {
		like = like + ` and ap_order.crt_time<${req.query.endtime}`;
	}
	var sql = "select ap_order.*,ap_user.nickname,ap_user.phone,ap_user.realname from ap_order,ap_user where ap_order.uid=ap_user.id" + like;
	mysql.query(sql, function(err, result) {
		if(err) {
			res.end("1");
		} else {
			res.end((Math.ceil(result.length / 10)).toString());
		}
	});
});

router.get('/selPage', function(req, res) {
	var like = "";
	if(req.query.id) {
		like = ` and ap_order.id like '%${req.query.id}%'`;
	}
	if(req.query.nickname) {
		like = like + ` and ap_user.nickname like '%${req.query.nickname}%'`;
	}
	if(req.query.starttime) {
		like = like + ` and ap_order.crt_time>${req.query.starttime}`;
	}
	if(req.query.endtime) {
		like = like + ` and ap_order.crt_time<${req.query.endtime}`;
	}
	var sql = "select ap_order.*,ap_user.nickname,ap_user.phone,ap_user.realname from ap_order,ap_user where ap_order.uid=ap_user.id" + like+" limit "+`${req.query.page*req.query.pageNum},${req.query.pageNum}`;
	mysql.query(sql, function(err, result) {
		chuli1(err,result,res)
	});
});

/*确认发货*/
// router.get("/edit",function(req,res){
// 	mysql.query("update ap_order set state=1 where id="+req.query.id,function(err,result){
// 		chuli(err,result,res)
// 	});
// });

router.get("/add",function(req,res){
	console.log(req.query)
});
module.exports = router;