const express = require('express');
const app = express();
// const Log = require('../model/mongoLogs.js');
const Logger = require('../config/logger.js');

const logger = new Logger('app');



const sendLogsController = {
    async sendLogs(req, res, next) {
        try {

            var data = req.body;
            if (!Object.keys(data).length) res.status(400).send({ "status": "error", "message": "payload not found" })


            logger.setLogData(data, req.ip)

            logger.error("Something went wrong");
            logger.debug("Hi");
            logger.info("Success");

            res.status(200).send({ "status": "OK", "user_id": data.user_id, "email": data.email })
        } catch (err) {
            res.status(500).send({ "status": "error", "message": err.message })
        }
    }
}

module.exports = sendLogsController;