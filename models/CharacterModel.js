const { DataTypes } = require("sequelize");

function CharacterModel(sequelize) {
    const Character = sequelize.define("Character", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.SMALLINT,
        },
        weight: {
            type: DataTypes.DOUBLE,
        },
        story: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        }
    });

    return Character;
}

module.exports = CharacterModel;