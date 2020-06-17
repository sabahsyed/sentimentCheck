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
    },
    score:
    {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0.0
    },
    magnitude:
    {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0.0
    },
  });
  //Message.sync();
  return Message;
};
