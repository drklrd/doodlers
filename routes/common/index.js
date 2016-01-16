var common = require('./common');

module.exports = function (router) {

		router.post('/common/create/new',common.createNewUser);

}