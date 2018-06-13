var express = require('express');
var router = express.Router();
var mysql = require("../../mysql.js");
var chuli1 = require("../../chuli1.js");
var chuli = require("../../chuli.js");
var time = require("../../time.js");

/*分页查询所有条数*/
router.get('/selAll', function(req, res) {
	var like = "";
	if(req.query.id) {
		like = ` and id like '%${req.query.id}%'`;
	}
	if(req.query.starttime) {
		like = like + ` and crt_time>'${time(new Date(parseInt(req.query.starttime)))}'`;
	}
	if(req.query.endtime) {
		like = like + ` and crt_time<'${time(new Date(parseInt(req.query.endtime)))}'`;
	}
	var sql = "select * from ap_proof where id>-1" + like;
	console.log(sql);
	mysql.query(sql, function(err, result) {
		if(err) {
			res.end("1");
		} else {
			res.end((Math.ceil(result.length / 10)).toString());
		}
	});
});

router.get('/selPage', function(req, res) {
	var like="";
	if(req.query.id) {
		like = ` and id like '%${req.query.id}%'`;
	}
	if(req.query.starttime) {
		like = like + ` and crt_time>'${time(new Date(parseInt(req.query.starttime)))}'`;
	}
	if(req.query.endtime) {
		like = like + ` and crt_time<'${time(new Date(parseInt(req.query.endtime)))}'`;
	}
	var sql = "select * from ap_proof where id>-1" + like+" limit "+`${req.query.page*req.query.pageNum},${req.query.pageNum}`;
	console.log(sql);
	mysql.query(sql, function(err, result) {
		chuli1(err,result,res)
	});
});

module.exports = router;