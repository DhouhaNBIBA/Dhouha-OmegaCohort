const PirateController = require("../controllers/pirates.controllers");

module.exports = app => {
        app.get("/api/pirates", PirateController.findAllPirates);
        app.get("/api/pirates/:id", PirateController.findOnePirate);
//     app.put("/api/pirates/:id/reviews", PirateController.addReview);
        app.post("/api/pirates/new", PirateController.createPirate);
        app.delete("/api/pirates/delete/:id", PirateController.deletePirate);
};