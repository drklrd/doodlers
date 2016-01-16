"use strict";

module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("posts", {
    user_id:  {
    	type :  DataTypes.INTEGER
    },
    post : {
    	type : DataTypes.TEXT
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

  return Posts;
};