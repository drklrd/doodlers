
module.exports = function (router) {

    require('./login')(router); // routes to authenticate & login stuffs
    require('./users')(router); // outes specific to users
    require('./common')(router); // common routes
    require('./render')(router); // routes to render the jade templates

}



