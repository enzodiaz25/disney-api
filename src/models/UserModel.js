const { DataTypes } = require("sequelize");

function UserModel(sequelize) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    });

    return User;
};

module.exports = UserModel;