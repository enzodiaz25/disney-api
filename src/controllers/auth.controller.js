const jwt = require("jsonwebtoken");
const userService = require("../services/user.service")
const dbconfig = require("../config/auth.config");

async function register(req, res) {
    try {
        const user = await userService.createUser({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.send({
            message: "User was registered succesfully!"
        })
    } catch(err) {
        res.status(500).send({
            message: err.message,
        })
    }
}

async function login(req, res) {
    try {
        // Check if user exists
        const user = await userService.find({ 
            username: req.body.username 
        });
        
        // If user does not exists, return with status code 404
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }

        // If user exists, validate password
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        
        // If password is not valid, return with status code 401
        // (a.k.a "unauthorized client")
        if (!passwordIsValid) {
            return res.status(401).send({
                accesToken: null,
                message: "Invalid password",
            })
        }

        // Create and sign a token for the user with his/her id
        const token = jwt.sign({ id: user.id }, dbconfig.secret, {
            expiresIn: 86400 // 24 hours
        })

        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accesToken: token,
        })
    } catch (err) {
        // If there was an error, return with status code 500
        // (server error)
        res.status(500).send({
            message: err.message
        })
    }
}

module.exports = {
    register,
    login
}