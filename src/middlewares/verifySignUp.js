const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Checks if user is duplicated
    User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username is already in use!"
            })
        }
        return;
    });

    // Checks if email is duplicated
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Email is already in use!"
            })
        };
        return;
    })

    next()
}

module.exports = checkDuplicateUsernameOrEmail;