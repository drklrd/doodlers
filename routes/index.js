var models  = require('../models');
var express = require('express');
var router = express.Router();
var config = require('../config');

var mysql = require('mysql');
var dbConfig=config.mysql;
var pool=mysql.createPool(dbConfig);
var jwt = require("jsonwebtoken");
var jwtSecret = config.jwtSecret;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('doodler/layout', { title: 'Express' });
});

router.get('/home',function(req,res){

	res.render('doodler/home');
});

router.get('/loginrender',function(req,res){

	res.render('doodler/login');
});

router.get('/dashhomerender',function(req,res){

	res.render('doodler/dash');
});

router.get('/test/me',function(req,res,next){

	// models.usersT.findOne({where:{account:'test@123.co'}},function(err,result){
	// 	console.log(result)
	// 	res.send = {
	// 		success : 1,
	// 		data : result
	// 	}
	// })

	models.users.findOne({
	  where: {account: 'test@123.co'}
	}).then(function(project) {
	  console.log(project)
	})

});

router.post('/authenticate',function(req,res,next){

	var sqlQuery = "SELECT * from users where account='test@user.com'" ;
	console.log(sqlQuery)
	pool.getConnection(function(err, connection) {
		connection.query(sqlQuery, function(err, resultData) {
			connection.release();
			if(err) return next(err);
			console.log(resultData);
			var userInfo = resultData[0];

			var token = jwt.sign({user:userInfo.account,  id:userInfo.id}, jwtSecret, { expiresIn: 60*60 });
			var loginRequires = {
				token:token,
				user:userInfo.account,
				id:userInfo.id
			}
			res.json({
				success:1,
				data:loginRequires
			})
			
		});
		
		

	});

});

module.exports = router;
