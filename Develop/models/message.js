module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    messages: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Anonymous"
    }
  });
  return Message;
};
