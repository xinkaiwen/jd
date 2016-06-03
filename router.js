var url=require('url');
var fs = require('fs');
var querystring = require('querystring');
module.exports.router = function(req,res){
	//请求路径
	var pathname =url.parse(req.url).pathname;

	if(pathname.indexOf('public')>0){
		res.writeHead(200);
		var path=__dirname+pathname;
		console.log(path);
		var c= fs.readFileSync(path);
		res.end(c);
	}else{
		switch(pathname){
			case '/':
				res.writeHead(200,{
					'Content-Type':
					'text/html;charset=utf-8'
				});
				//
				//全局变量
				var realPath=__dirname+'/page/index.html';
				var content=fs.readFileSync(realPath, 'utf8');
				
				res.end(content);
				break;
			
			default:
				res.writeHead(200);
				res.end('404');
				break;
		}
	}
}
