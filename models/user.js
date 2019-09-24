module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    DOB: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  });

  return User;
};
