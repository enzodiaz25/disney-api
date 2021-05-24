const Sequelize = require("sequelize");
const dbconfig = require("../config/db.config");

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.aquire,
            idle: dbconfig.pool.idle,
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/UserModel")(sequelize);
db.genre = require("../models/GenreModel")(sequelize);
db.production = require("../models/ProductionModel")(sequelize);
db.character = require("../models/CharacterModel")(sequelize);

module.exports = db;