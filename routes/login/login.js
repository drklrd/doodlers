var config = require('../../config');
var dbconnect = require('../../dbconnect');

var mysql = require('mysql');
var dbConfig=config.mysql;
var pool=mysql.createPool(dbConfig);
var jwt = require("jsonwebtoken");
var jwtSecret = config.jwtSecret;
var bcrypt = require('bcryptjs');

var login = {

	authenticate : function (req,res,next){

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

               		var authenticated=bcrypt.compareSync(user.password,userInfo.password);
               		console.log(authenticated)

					if(authenticated){
						var token = jwt.sign({user:userInfo.account,  id:userInfo.id}, jwtSecret, { expiresIn: 60*60 });
						var loginRequires = {
							token:token,
							user:userInfo.account,
							id:userInfo.id
						}
						console.log(loginRequires)
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

	},


	verifyToken : function(req,res,next){

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

	}


}

module.exports = login;