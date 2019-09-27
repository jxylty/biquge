const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./test-db.js');
const bookList = require('./bookList')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // 加密模块
const app = express();

app.use( express.static( path.join( __dirname, 'img')));
app.use(bodyParser.json());
app.use(cookieParser());
const codeMap = new Map();


app.get('/bqg/books',function(req,res){
	res.send(bookList.bookList)
})

//查询我的书架
app.post('/bqg/bookcase', async function(req,res){
	let user= req.body.name;
	let chaxv = await db.getUsers2(user);
	res.send(chaxv)
})

app.post('/bqg/login',async function (req, res) {
	let md5 = crypto.createHash('md5');
	let password = md5.update(req.body.password).digest('hex');
	
	let chaxv = await db.getUsers(req.body.name);
	// console.log(chaxv);
	if(password==chaxv.result[0].password){
		let token = jwt.sign(req.body.name, 'abc');
		
		res.cookie('user', req.body.name);
		res.cookie('token', token);
		res.send('1')
	}else{
		res.send('0')
	}
})
app.post('/bqg/user', async function (req, res) {
	
	let chaxv = await db.getUsers(req.body.name);
	// console.log(chaxv);
	if(chaxv.stas==0){
		let md5 = crypto.createHash('md5');
		let password = md5.update(req.body.password).digest('hex');
		req.body.password = password;

		let ret = await db.createUser(req.body);

		let chuanjian = await db.creatColl(req.body.name);
		console.log('chuanjian', chuanjian)
		res.send(ret)
	}else if(chaxv.stas==1){
		res.send('用户已存在')
	}
	
	
});





const port = 3000;
app.listen(port,function(){
	console.log('ok',port)
})