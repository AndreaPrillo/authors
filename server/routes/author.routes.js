const AuthorController = require('../controllers/author.controller');  
module.exports = (app) => {

    app.get('/api/author', AuthorController.findAllAuthores);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.put('/api/author/:id', AuthorController.update_Author);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor);
}
