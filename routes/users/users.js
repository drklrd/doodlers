var config = require('../../config');
var dbconnect = require('../../dbconnect');
var mysql = require('mysql');
var dbConfig=config.mysql;
var pool=mysql.createPool(dbConfig);
var jwt = require("jsonwebtoken");
var jwtSecret = config.jwtSecret;
var models = require('../../models');


var users = {

	getProfile : function(req,res,next){

		models.users.findOne({
		  where: {id: req.user.id}
		}).then(function(userResult){
			if(userResult){
				res.json({
					success:1,
					profile:userResult.dataValues
				})
			}else{
				res.json({
					success:0,
					message : 'No profile found !'
				})
			}
		}).catch(function(error){
			return next(error);
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

		var createOptions = {
			user_id: req.user.id,
			post: req.body.post
		}
		models.posts.create(createOptions).
		then(function(postResult) {
			if (postResult) {
				res.json({
					success: 1,
					message: 'Expressed !'
				})
			}
		}).catch(function(error) {
			return next(error);
		})


	}


};


module.exports = users;
