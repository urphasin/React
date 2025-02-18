const express = require('express')
const app = express();

const port = 3005;

app.get(
    '/',
    (request, response) => {
        response.send(`Hello ${port}`);
    }
)

app.listen(
    port,
    () => {
        console.log(`local host on ${port}`)
    }
)