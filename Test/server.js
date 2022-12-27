const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
DB_NAME ="note"

// MiddelWare
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));

require("./server/config/mongoose.config")(DB_NAME);
const NoteController = require("./server/routes/note.routes")
NoteController(app);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`) );
