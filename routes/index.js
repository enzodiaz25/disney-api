function routes(app) {
    app.get("/something", (req, res) => {
        console.log("hi")
    })
}

module.exports = routes;
