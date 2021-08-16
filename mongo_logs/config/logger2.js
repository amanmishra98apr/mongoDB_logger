const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');


async function main() {
    try {
        dotenv.config();
        const uri = process.env.MONGO_DB;
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();
        // client.close()
        await createListing(client, {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        });
    } catch (e) {
        console.error(e);
    }
}


async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}



main().catch(console.error);

module.exports = main;