import * as express from 'express';

function redirectToIndex(req, res, next) {
    req.url = '/index.html';
    next();
}

export function staticFilesEndpoint(app, { webRoot }) {
    const staticServer = express.static(webRoot, { redirect: false });
    app.use(staticServer);
    app.get('*', redirectToIndex);
    app.use(staticServer);

    console.log(`Serving from ${webRoot}`); // tslint-disable-line no-console
}
