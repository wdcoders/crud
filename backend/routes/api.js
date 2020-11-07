const crudController = require('../app/http/controller/crudController');

function initRoute(app){

    // CRUD
    app.get('/crud/read', crudController().read);
    app.get('/crud/create', crudController().delete);
    app.get('/crud/update', crudController().update);
    app.get('/crud/delete', crudController().delete);

}

module.exports = initRoute;