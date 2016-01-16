module.exports = function(router) {

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
	});

}