function chuli(err,result,res){
	if(err){
		res.end("err");
	}else{
		if(result.affectedRows>0){
			res.end("ok");
		}else{
			res.end("err");
		}
	}
}

module.exports=chuli;
