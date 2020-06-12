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

  Message.associate = function(models) {
    // We're saying that a Message should belong to a User
    // A Message can't be created without a User due to the foreign key constraint
    Message.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Message;
};
