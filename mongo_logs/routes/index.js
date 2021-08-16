const express = require('express');
const sendLogsController = require('../controller/sendLogsController.js');


const router = express.Router();


router.post('/logs', sendLogsController.sendLogs);


module.exports = router;