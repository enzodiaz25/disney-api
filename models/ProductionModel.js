const { DataTypes } = require("sequelize");

function ProductionModel(sequelize) {
    const Production = sequelize.define("Production", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publicationDate: {
            type: DataTypes.DATE,
        },
        rating: {
            type: DataTypes.SMALLINT,
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        }
    })

    return Production;
}

module.exports = ProductionModel;