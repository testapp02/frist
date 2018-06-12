function chuli(err,result,res){
	if(err){
		console.log(err);
		res.end(JSON.stringify({message:"err"}));
	}else{
		res.end(JSON.stringify(result));
	}
}
module.exports=chuli;