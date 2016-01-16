var config = require('../../config');
var dbconnect = require('../../dbconnect');
var mysql = require('mysql');
var dbConfig=config.mysql;
var pool=mysql.createPool(dbConfig);
var jwt = require("jsonwebtoken");
var jwtSecret = config.jwtSecret;
var bcrypt = require('bcryptjs');


var common = {

	createNewUser : function(req,res,next){
		console.log('HURAYYYYYYYYYYYYyy')
		var sqlCheck = "SELECT id FROM users WHERE account='"+req.body.username+"'";
		dbconnect.connect(sqlCheck,function(err,result){
			if(err) return next(err);
			if(!(result && result.length)){
				var plainPassword = req.body.password;
				console.log('plain pass ***********');
				console.log(plainPassword)
				var encryptedPassword = bcrypt.hashSync(plainPassword);
				var sql = "INSERT INTO users (id,account,password,first_name,last_name,color_profile,created_at,updated_at,is_deleted) VALUES (NULL,'"+req.body.username+"','"+encryptedPassword+"','"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.colorprofile+"',NULL,NULL,0) ";
				dbconnect.connect(sql,function(err,result){
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

	}

};

module.exports = common;