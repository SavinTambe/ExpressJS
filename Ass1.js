var exp=require('express');
var bp=require('body-parser');
var app=exp();

app.use(bp.urlencoded({extended:false}));

app.use(exp.static('images'));

app.listen(9000,function(){
	console.log("exp up at 9000");
});

app.get('/login',function(req,res){
	//console.log(__dirname);
	res.sendFile(__dirname+"/login.html");
});

app.post('/logincheck',function(req,res){
	
	if(req.body.uid=="savin" && req.body.pw=="tambe")
	{
		res.writeHead(200,{'content-type':'text/html'});
		res.write("<h2>Login Successful</h2>");
		res.write("<h3>Welcome "+req.body.uid+" </h3>");
		res.end();
	}
	else{
		res.send("<h3> Login Failed </h3>");
	}
});

app.all('*',function(req,res){
	res.send("Invalid URL !!");
});