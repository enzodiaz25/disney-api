const config = require("../config/db.config");

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "lnelkvnwovnw0evoweinvowenv",
    DB: "disneydb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000,
    }
};