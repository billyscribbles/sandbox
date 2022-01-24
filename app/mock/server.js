// JSON-Server configuration
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const delay = require('express-delay');

//Low DB Configuration
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);

//Generic JSON-Server setup
server.use(middlewares);
server.use(jsonServer.bodyParser);

//Adds a delay to responses to simulate a real API server
server.use(delay(1000));

//Adding a time stamp every resource created:
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});

//-----------------------------------------------------------------------------Custom Routes / Endpoints-----------------------------------------------------------------------------
server.get('/echo', (req, res) => {
    res.jsonp(req.query);
});

//-----------------------------------------------------------------------------End of Custom Routes / Endpoints-----------------------------------------------------------------------------

//Running Server
server.use(router);
server.listen(8083, () => {
    console.log('\x1b[36m%s\x1b[0m', 'JSON Server is running on http://localhost:8083');
});
