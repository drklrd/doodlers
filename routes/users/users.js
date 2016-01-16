var config = require('../../config');
var dbconnect = require('../../dbconnect');
var mysql = require('mysql');
var dbConfig=config.mysql;
var pool=mysql.createPool(dbConfig);
var jwt = require("jsonwebtoken");
var jwtSecret = config.jwtSecret;


var users = {

	getProfile : function(req,res,next){

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
		
		
	},

	getPosts : function(req,res,next) {

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

	},

	createNewPost : function (req,res,next){

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


	}


};


module.exports = users;
