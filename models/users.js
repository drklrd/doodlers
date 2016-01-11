"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    account: DataTypes.STRING,
    password : DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at:DataTypes.DATE,
    is_deleted:DataTypes.BOOLEAN

  
  });

  return Users;
};