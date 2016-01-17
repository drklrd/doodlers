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

		models.posts.findAll({ where: {user_id:req.user.id,is_deleted:0}, 
			include : [models.users],
			limit : 10,
			order : [['created_at','DESC']]
			}
			).then(function(result){
			console.log(result);
			res.json({
				success : 1,
				posts : result
			})
		}).catch(function(error){
			console.log(error);
			return next(error);
		})

		// var sql = 'SELECT posts.id,posts.user_id,posts.post,posts.created_at,users.id,users.first_name,users.last_name,users.color_profile from posts INNER JOIN users ON users.id=posts.user_id  WHERE posts.user_id='+ req.user.id+" ORDER BY posts.created_at DESC";
		// dbconnect.connect(sql,function(err,result){
		// 	console.log(err)
		// 	if(err) return next(err);
		// 	console.log(result)
		// 	res.json({
		// 		success:1,
		// 		posts : result
		// 	})
		// })

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


	},

	deletePost : function(req,res,next){

		var deleteOptions = {
			id : req.body.postID,
			user_id : req.user.id
		};

		models.posts.findOne({
		  where: {id: deleteOptions.id,user_id:deleteOptions.user_id}
		}).then(function(post){
			if(post){
				models.posts.update({
					is_deleted:1
				},{
					where:{
						id:req.body.postID
					}
				}).then(function(updated){
					if(updated){
						res.json({
							success:1,
							message : 'Post deleted successfully !'
						})

					}
				}).catch(function(error){
					return next(error);
				})

			}else{
				res.json({
					success:0,
					message : 'No post record found !'
				})
			}
		}).catch(function(error){
			console.log(error)
			return next(error);
		});



	},

	updatePost : function(req,res,next){

		var updateOptions = {
			id : req.body.postID,
			user_id : req.user.id,
			post : req.body.post
		};

		models.posts.findOne({
		  where: {id: updateOptions.id,user_id:updateOptions.user_id}
		}).then(function(post){
			if(post){
				models.posts.update({
					post:updateOptions.post
				},{
					where:{
						id:updateOptions.id
					}
				}).then(function(updated){
					if(updated){
						res.json({
							success:1,
							message : 'Post updated successfully !'
						})

					}
				}).catch(function(error){
					return next(error);
				})

			}else{
				res.json({
					success:0,
					message : 'No post record found !'
				})
			}
		}).catch(function(error){
			console.log(error)
			return next(error);
		});




	}


};


module.exports = users;
