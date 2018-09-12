import * as express from 'express';
import { staticFilesEndpoint } from './endpoints/staticFilesEndpoint';
import { apiEndpoint } from './endpoints/apiEndpoint';

const config = {
    webRoot: process.env.WEBROOT || './dist',
    port: process.env.PORT || 3001
};

const endpoints = [
    apiEndpoint,
    staticFilesEndpoint
];

const app = express();
endpoints.forEach(useEndpoint => useEndpoint(app, config));

app.listen(config.port, () => console.log(`Server listening on port ${config.port}!`));
