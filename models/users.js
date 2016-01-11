"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("usersTs", {
    account: DataTypes.STRING,
    type : DataTypes.STRING
  
  });

  return User;
};