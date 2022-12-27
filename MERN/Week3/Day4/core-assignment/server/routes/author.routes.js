const { addAuthor,getAllAuthors,getAuthor, updateAuthor, delet,addBook } = require('../controllers/auther.controllers');

module.exports= app =>{
    app.post('/api/authors', addAuthor);
    app.get('/api/authors', getAllAuthors);
    app.get('/api/authors/:id', getAuthor);
    app.put('/api/authors/update/:id', updateAuthor);
    app.delete('/api/authors/:id', delet);

    app.put('/api/authors/book/:id', addBook);

}