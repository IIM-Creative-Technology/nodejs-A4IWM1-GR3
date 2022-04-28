const DocumentController = require("../controllers/document");

const list = (app) => {
    app.get('/document', DocumentController.list)
};
const read = (app) => {
    app.get('/document/:id', DocumentController.read)
};
const create = (app) => {
    app.post('/document', DocumentController.create);
};
const upload = (app) => {
    app.post('/document/upload', DocumentController.upload);
};
const download = (app) => {
    app.get('/document/:id/download', DocumentController.download);
};
const update = (app) => {
    app.put('/document/:id', DocumentController.update)
};
const del = (app) => {
    app.delete('/document/:id', DocumentController.delete)
};

module.exports = {
    createRoutes: (app) => {
        list(app);
        read(app);
        create(app);
        upload(app);
        download(app);
        update(app);
        del(app);
    }
}

