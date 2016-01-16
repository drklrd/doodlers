var models  = require('../models');
var express = require('express');
var router = express.Router();
var config = require('../config');
var dbconnect = require('../dbconnect');

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

router.get('/signuprender',function(req,res){

	res.render('doodler/signup');
}); 

router.get('/dashhomerender',function(req,res){

	res.render('doodler/dash');
});

router.get('/signupsuccessfulrenderer',function(req,res){
	res.render('doodler/signupsuccessful')
})

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

router.get('/users/posts/fetch',function(req,res,next){
	var sql = 'SELECT posts.id,posts.user_id,posts.post,posts.created_at,users.id,users.first_name,users.last_name,users.color_profile from posts INNER JOIN users ON users.id=posts.user_id  WHERE posts.user_id='+ req.user.id+" ORDER BY posts.created_at DESC";
	dbconnect.connect(sql,function(err,result){
		console.log(err)
		if(err) return next(err);
		console.log(result)
		res.json({
			success:1,
			posts : result
		})
	})
});

router.post('/users/posts/new',function(req,res,next){

	var sql = "INSERT INTO posts (id,user_id,post,created_at,updated_at,is_deleted) VALUES (NULL,"+req.user.id+",'"+req.body.post+"',NULL,NULL,0) ";
	console.log(sql)
	dbconnect.connect(sql,function(err,result){
		console.log(err)
		if(err) return next(err);
		res.json({
			success:1,
			message : 'Expressed !'
		})
	});


});

router.get('/users/profile/fetch',function(req,res,next){

	var sql = "SELECT * from users where id="+req.user.id;
	console.log(sql)
	dbconnect.connect(sql,function(err,result){
		console.log(err)
		if(err) return next(err);
		res.json({
			success:1,
			profile:result[0]
		})
	});


})

router.post('/common/create/new',function(req,res,next){

	var sqlCheck = "SELECT id FROM users WHERE account='"+req.body.username+"'";
	dbconnect.connect(sqlCheck,function(err,result){
		if(err) return next(err);
		if(!(result && result.length)){
			var sql = "INSERT INTO users (id,account,password,first_name,last_name,color_profile,created_at,updated_at,is_deleted) VALUES (NULL,'"+req.body.username+"','"+req.body.password+"','"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.colorprofile+"',NULL,NULL,0) ";
			console.log(sql)
			dbconnect.connect(sql,function(err,result){
				console.log(err)
				if(err) return next(err);
				res.json({
					success:1,
					error:0,
					message : 'User successfully created !'
				})
			});
		}else{
			res.json({
				success:1,
				error : 1,
				message : 'User already exits !'
			})
		}
	})

	


});

router.post('/authenticate',function(req,res,next){

	var user = {
		username : req.body.username,
		password : req.body.password
	}
	console.log(user)

	var sqlQuery = "SELECT * from users where account='"+user.username+"'" ;
	pool.getConnection(function(err, connection) {
		connection.query(sqlQuery, function(err, resultData) {
			connection.release();
			if(err) return next(err);
			console.log(resultData)
			if((resultData && resultData.length)){


				var userInfo = resultData[0];

				if(userInfo.password === user.password){
					var token = jwt.sign({user:userInfo.account,  id:userInfo.id}, jwtSecret, { expiresIn: 60*60 });
					var loginRequires = {
						token:token,
						user:userInfo.account,
						id:userInfo.id
					}
					res.json({
						success:1,
						error : 0,
						data:loginRequires
					})
				}else{
					res.json({
						success:1,
						error : 1,
						message : 'Email Password mismatch !'
					})
				}

				
			}else{
				res.json({
					success:1,
					error : 1,
					message : 'User Not Registered !'
				})
			}
			
			
		});
		
		

	});

});

router.get('/verifytoken',function(req,res,next){

	var authorizationHeader = req.headers.authorization;
	var token = authorizationHeader.split(" ")[1];
	jwt.verify(token, jwtSecret, function(err, decoded) {
		console.log(err)
	    if(err) {
	    	res.json(err)
	    }else{
	    	res.json({
	    		success : 1,
	    		message : 'error!'
	    	})
	    }
	    
	});

})

module.exports = router;
