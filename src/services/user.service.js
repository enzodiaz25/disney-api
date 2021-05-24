const bcrypt = require("bcryptjs");
const db = require("../models");

const User = db.user;

async function create(user) {
    user.password = bcrypt.hashSync(user.password, 8);
    return User.create(user);
}

async function find(query) {
    const params = {
        where: query
    };

    return User.findOne(params);
}