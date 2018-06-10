const crypto=require("crypto");

function fn(str) {
    var md5=crypto.createHash("md5");
    md5.updata(str);
    return (md5.digest("hex"));
}
module.exports=fn;