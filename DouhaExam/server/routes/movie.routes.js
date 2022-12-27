const MovieController = require("../controllers/movie.controllers");

module.exports = app => {
    app.get("/api/movies/", MovieController.findAllMovies);
    app.get("/api/movies/:id", MovieController.findOneMovie);
    app.put("/api/movies/:id/reviews", MovieController.updateExistingMovie);
    app.post("/api/movies/new", MovieController.createNewMovie);
    app.delete("/api/movies/delete/:id", MovieController.deleteAnExistingMovie);
};