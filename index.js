require('dotenv').config();
const express = require('express');

const responseHelper = require('./middleware/response')

async function startServer() {

    const app = express();

    const port = process.env.APP_PORT ?? 3000;
    app.use(responseHelper)

    const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
    app.Server = server;
    require("http").createServer(app)
    await require('./loaders')({app});

}

void startServer();
