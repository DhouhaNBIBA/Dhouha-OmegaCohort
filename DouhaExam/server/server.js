const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
DB_NAME ="movie"

// MiddelWare
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));

require("./config/mongoose.config")(DB_NAME);
const MovieController = require("./routes/movie.routes")
MovieController(app);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`) );