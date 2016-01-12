var config = require('./config');

var mysql = require('mysql');
var dbConfig=config.mysql;
var pool=mysql.createPool(dbConfig);
module.exports = {
	connect : function connect(query,cb){

		var sqlQuery=query;
		pool.getConnection(function(err,connection){
			if(err) return cb(err);
			connection.query(sqlQuery,function(err,result){
				if(err) return cb(err);
				return cb(null,result)
			})
		});

	}
}
