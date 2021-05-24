const { DataTypes } = require("sequelize");

function GenreModel(sequelize) {
    const Genre = sequelize.define("Genre", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        }
    })

    return Genre;
}

module.exports = GenreModel;