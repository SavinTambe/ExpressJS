var exp=require('express');
var fs=require('fs');
var url=require('url');
var app=exp();


app.listen(9000,function(){
	console.log("exp up at 9000");
});

app.use(function(req,res,next){
	
	var p=url.parse(req.url,true).pathname;
	var cdate=new Date();
	
	if(p!='/favicon.ico'){
		
	
	var str="Request received for "+p+" at "+cdate.toString()+" \n";
		fs.appendFile("log.txt",str,function(err){
			if(!err)
			{
				console.log("log Generated");
				res.writeHead(200,{'content-type':'text/html'});
				res.write("this request is logged");
				res.end();
			}
			else
			{
				console.log(err.toString());
			}
		});
	}
});

app.all('*',function(req,res){
	res.send("Invalid URL !!!");
});
