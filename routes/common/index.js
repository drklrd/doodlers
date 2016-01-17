var common = require('./common');
var models = require('../../models');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config').jwtSecret;
module.exports = function(router) {

	router.post('/common/create/new', common.createNewUser);

	router.get('/test/api', function(req, res, next) {

		models.posts.findAll({ where: {user_id:5}, 
			include : [models.users],
			limit : 10,
			order : [['created_at','DESC']]
			}
			).then(function(result){
			console.log(result);
			res.json({
				data : result
			})
		}).catch(function(error){
			console.log(error);
			return next(error);
		})

	})

}