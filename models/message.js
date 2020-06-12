module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Anonymous"
    },
    messages: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sentiment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
    dislikes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }
  });
  return Message;
};
