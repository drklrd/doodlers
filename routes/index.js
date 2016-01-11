var models  = require('../models');
var express = require('express');
var router = express.Router();

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

	models.usersTs.findOne({
	  where: {account: 'test@123.co'}
	}).then(function(project) {
	  console.log(project)
	})

});

module.exports = router;
