const http = require('http');

const httpServer = http.createServer((req, res) => {
    const trimmedPath = req.pathname.replace(/^\/+|\/+$/g, '');
});

httpServer.listen(3000, () => {
    console.log('Server started at ', 3000);

    const handlerToBeCalled = typeof (router[trimmedPath]) === 'undefined' ? handlers.notFound : handlers[router[trimmedPath]];
    handlerToBeCalled(reqPayload, (statusCode, resp) => {
        statusCode = typeof (statusCode) == 'number' ? statusCode : 200;
        resp = typeof (resp) == 'object' ? resp : {};
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        const respoString = JSON.stringify(resp);
        res.end(respoString);
    });
});

const handlers = {};

handlers.hello = (data, callback) => {
    callback(200, { message: 'Hello World' });
};

handlers.notFound = (data, callback) => {
    callback(404);
};

const router = {
    hello: 'hello'
};