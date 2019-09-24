module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    DOB: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  });

  return User;
};
