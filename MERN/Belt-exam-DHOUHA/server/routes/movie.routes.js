const MovieController = require("../controllers/movie.controllers");

module.exports = app => {
    app.get("/api/movies", MovieController.findAllMovies);
    app.get("/api/movies/:id", MovieController.findOneMovie);
    app.put("/api/movies/:id/reviews", MovieController.addReview);
    app.post("/api/movies/new", MovieController.createNewMovie);
    app.delete("/api/movies/delete/:id", MovieController.deleteAnExistingMovie);
};
// module.exports = app => {
//     app.post('/api/movies',AddMovies);
//     app.get('/api/movies',ShowAll);
//     app.get('/api/movies/:id',ShowOne);
//     app.delete('/api/movies/:id',DeleteMovie);
//     //reviews
//     app.put('/api/movies/reviews/:id',addReviews );