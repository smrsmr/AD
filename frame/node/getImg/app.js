const http = require('http');
const fs = require('fs');
const cheerio = require("cheerio");
const url = 'http://www.ivsky.com/'
function dow(url,callback) {
    http.get(url,(res)=>{
        let  data=''
        res.on('error',(err)=>{
            console.log(err)
        }).on('data',(chunk)=>{
            data += chunk
        }).on('end',()=>{
            callback(data)
        })
    })
}
dow(url,function (data) {
    if(data){
        var $=cheerio.load(data);
        $("img").each(function(i,elem){
            var imgSrc=$(this).attr("src");
            http.get(imgSrc,function(res){
                var imgData="";
                res.setEncoding("binary");
                res.on("data",function(chunk){
                    imgData += chunk;
                });
                res.on("end",function(){
                    var imgPath="/"+i+"."+imgSrc.split(".").pop();
                    fs.writeFile(__dirname + "/images"+imgPath,imgData,"binary",function(err){
                        console.log(err);
                    })
                })

            })
        })
    }
})