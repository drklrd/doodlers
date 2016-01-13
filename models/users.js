"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    account:  {
    	type :  DataTypes.STRING,
    	field : 'account'
    },
    password : {
    	type : DataTypes.STRING,
    	field:'password'
    },
    createdAt:{
    	type:DataTypes.DATE,
    	field : 'created_at'
    },
    updatedAt:{
    	type : DataTypes.DATE,
    	field :'updated_at'
    },
    is_deleted:{
    	type:DataTypes.BOOLEAN,
    	field:'is_deleted'

    } 

  
  });

  return Users;
};