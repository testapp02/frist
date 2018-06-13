module.exports=function(time){
	var year=time.getFullYear()>=10?time.getFullYear():"0"+time.getFullYear();
	var mon=time.getMonth()+1>=10?time.getMonth()+1:"0"+(time.getMonth()+1);
	var day=time.getDate()>=10?time.getDate():"0"+time.getDate();
	var hours=time.getHours()>=10?time.getHours():"0"+time.getHours();
	var min=time.getMinutes()>=10?time.getMinutes():"0"+time.getMinutes();
	var sec=time.getSeconds()>=10?time.getSeconds():"0"+time.getSeconds();
	return year+"-"+mon+"-"+day+" "+hours+":"+min+":"+sec;
}
