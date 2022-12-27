const NoteController = require("../controllers/note.controllers");

module.exports = app => {
    app.get("/api/notes/", NoteController.findAllNotes);
    app.get("/api/notes/:id", NoteController.findOneNote);
    app.put("/api/notes/update/:id", NoteController.updateExistingNote);
    app.post("/api/notes/new", NoteController.createNewNote);
    app.delete("/api/notes/delete/:id", NoteController.deleteAnExistingNote);
};