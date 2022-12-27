const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
DB_NAME ="product"

// MiddelWare
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));

require("./server/config/mongoose.config")(DB_NAME);
const ProductController = require("./server/routes/products.route")
ProductController(app);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`) );
