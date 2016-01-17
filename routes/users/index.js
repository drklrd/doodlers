var users = require('./users');

module.exports = function (router) {

		router.get('/users/posts/fetch',users.getPosts);

		router.post('/users/posts/new',users.createNewPost);

		router.put('/users/posts/delete',users.deletePost);

		router.put('/users/posts/update',users.updatePost);

		router.get('/users/profile/fetch',users.getProfile);



}