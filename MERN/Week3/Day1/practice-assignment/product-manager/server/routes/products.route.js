const ProductController = require ('../controllers/products.controllers')

module.exports = app => {
    // app.get("/api/Product/", ProductController.findAllProduct);
    // app.get("/api/Product/:id", ProductController.findOneProduct);
    // app.put("/api/Product/update/:id", ProductController.updateExistingProduct);
    app.post("/api/", ProductController.createNewProduct);
    // app.delete("/api/Product/delete/:id", ProductController.deleteAnExistingProduct);
};