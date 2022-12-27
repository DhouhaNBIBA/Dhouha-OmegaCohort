const express = require ('express');
const cors = require('cors');
const app =express();

// // MiddelWare
app.use(cors()); 
app.use(express.json(), express.urlencoded({extended:true}));
require("./config/mongoose.config")("authers");

 //Routes
require("./routes/author.routes")(app);
 //PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`) );

// const express = require('express');
// const app = express();
// const PORT = 8000;
// const cors = require('cors');
// DB_NAME ="authers"

// // MiddelWare
// app.use(cors())
// app.use(express.json(), express.urlencoded({extended:true}));

// // require("./server/config/mongoose.config")(DB_NAME);
// // const ProductController = require("./server/routes/products.route")
// // ProductController(app);


