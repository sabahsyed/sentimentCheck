module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Anonymous"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  //Message.sync();
  return Message;
};
