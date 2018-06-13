var express = require('express');
var router = express.Router();
var mysql1 = require("./mysql-thing");
var mysql = require("./mysql");
var chuli = require("./chuli.js");
var chuli1 = require("./chuli1.js");
var async = require("async");
var time = require("./time.js");
var md5 = require("./md5.js");
var ip = require("./ip.js");
router.get("/check", function(req, res) {
	async.parallel([function(next) {
		mysql.query("select * from user where uname=? and upass=?", [req.query.uname, md5(req.query.upass)], function(err, result) {
			if(err) {
				next("err");
			} else {
				if(result.length == 1) {
					var obj = {};
					obj.message = "ok";
					obj.uname = result[0].uname;
					obj.ustatus = result[0].ustatus;
					obj.wname = result[0].wname;
					next(null, obj);
				} else {
					next("err");
				}
			}
		});
	}], function(err, results) {
		if(err) {
			res.end(JSON.stringify({
				message: "err"
			}));
		} else {
			var obj = results[0];
			mysql.query("insert into journal (uname,wname,cztype,cztime,ip) values (?,?,?,?,?)", [obj.uname, obj.wname, "登录系统", time(new Date()), ip(req)], function(err, result) {
				res.end(JSON.stringify(results[0]));
				if(err) {
					console.log(err);
				} else {}
			});
		}
	});
});

module.exports = router;