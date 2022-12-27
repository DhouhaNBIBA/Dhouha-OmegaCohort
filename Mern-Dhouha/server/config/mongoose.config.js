const mongoose = require('mongoose');


module.exports = (DB_NAME) => {
mongoose.connect(`mongodb://localhost/${DB_NAME}`)

    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))
}
