var url =require("url");
var http =require("http");
var fs = require('fs');

 var server= http.createServer(function(req,res)
  {
	var pathname =url.parse(req.url).pathname;
	var homepage = fs.readFileSync('views/post/new2.html');
	if(pathname === '/')
	{
	   res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	   res.end(homepage);
	}
	else if(pathname ==='/post')
	{
	   res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	   var newpost = fs.readFileSync('views/post/new.html');
	   res.end(newpost);
	}
	else if(pathname ==='/welcome')
	{
	   res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	   var welcome = fs.readFileSync('views/welcome/new1.html');
	   res.end(welcome);
	}

	else if(pathname ==='/location')
	{
	   res.writeHead(301, {"Location":"views/welcome/new1.html"});
	   res.end("welcome1");
	}
	else
	{
	   res.writeHead(404, {"content-Type":"text/plain"});
	   res.end("page not found");
	}
 });

  server.listen(8000);
  console.log('Listening on http://127.0.0.1:8000');  
	