const dbConnection = require('./src/db/dbconnection');
const loginRoute = require('./src/login');
const express = require('express');
const app = express();
const port = 4000;

app.use('/login',loginRoute)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
