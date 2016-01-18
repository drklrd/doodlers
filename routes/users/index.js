var usersModule = require('./users');

module.exports = function (router) {

		router.get('/users/posts/fetch',usersModule.getPosts);

		router.post('/users/posts/new',usersModule.createNewPost);

		router.put('/users/posts/delete',usersModule.deletePost);

		router.put('/users/posts/update',usersModule.updatePost);

		router.get('/users/profile/fetch',usersModule.getProfile);



}