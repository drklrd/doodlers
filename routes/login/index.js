var login = require('./login');


module.exports = function ( router) {


	// router.get('/test/me',function(req,res,next){

	// 	// models.usersT.findOne({where:{account:'test@123.co'}},function(err,result){
	// 	// 	console.log(result)
	// 	// 	res.send = {
	// 	// 		success : 1,
	// 	// 		data : result
	// 	// 	}
	// 	// })

	// 	models.users.findOne({
	// 	  where: {account: 'test@123.co'}
	// 	}).then(function(project) {
	// 	  console.log(project)
	// 	})

	// });

	

	router.post('/authenticate',login.authenticate);

	router.get('/verifytoken',login.verifyToken);


}