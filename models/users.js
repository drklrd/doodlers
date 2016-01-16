"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    first_name:  {
        type :  DataTypes.STRING,
        field : 'first_name',
        allowNull : false
    },
    last_name:  {
        type :  DataTypes.STRING,
        field : 'last_name',
        allowNull : false
    },
    color_profile:  {
        type :  DataTypes.STRING,
        field : 'color_profile',
        allowNull : false
    },
    account:  {
    	type :  DataTypes.STRING,
    	field : 'account',
        allowNull : false
    },
    password : {
    	type : DataTypes.STRING,
    	field:'password',
        allowNull : false
        
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