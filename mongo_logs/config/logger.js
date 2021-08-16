const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');


class LoggerService {
    // static async dbEstablish() {
    constructor() {
        this.init()
    }
    async init() {
        dotenv.config();
        const uri = process.env.MONGO_DB;

        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();
        this.client = client;
        let logDB = await this.client.db("logDB")
        this.logDB = logDB;
        console.log("init function running")
    }

    // functions
    setLogData(body, ip) {
        this.body = body;
        this.ip = ip;
    }

    // log functions
    async info(message) {
        let newListing = {
            level: "info",
            timestamp: new Date,
            message: message,
            user_id: this.body.user_id,
            email: this.body.email,
            IP: this.ip

        }
        const result = await this.logDB.collection("logs").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);


    }

    async debug(message) {
        let newListing = {
            level: "debug",
            timestamp: new Date,
            message: message,
            user_id: this.body.user_id,
            email: this.body.email,
            IP: this.ip
        }
        const result = await this.logDB.collection("logs").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);

    }

    async error(message) {
        let newListing = {
            level: "error",
            timestamp: new Date,
            message: message,
            user_id: this.body.user_id,
            email: this.body.email,
            IP: this.ip

        }
        const result = await this.logDB.collection("logs").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);

    }

}

module.exports = LoggerService;