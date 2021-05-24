const express = require("express");
const cors = require("cors");
const db = require("./models")
const routes = require("./routes");

// Create app
const app = express();

// Set cors options
const corsOptions = {
    origin: "http://localhost:8081"
};

// Set middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
db.sequelize.sync().then(() => {
    console.log("Connection established")
})

// Set routes
app.use("./api", routes)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});