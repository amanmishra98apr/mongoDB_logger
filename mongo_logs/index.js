const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/logger.js')
    // const mongo = require('./config/logger2.js')

const routes = require('./routes/index.js');
const app = express();




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes);

dotenv.config();
APP_PORT = process.env.PORT;

app.listen(APP_PORT, () => {
    console.log(`listening on port ${APP_PORT}`);
});