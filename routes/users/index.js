var users = require('./users');

module.exports = function (router) {

		router.get('/users/posts/fetch',users.getPosts);

		router.post('/users/posts/new',users.createNewPost);

		router.get('/users/profile/fetch',users.getProfile);

}