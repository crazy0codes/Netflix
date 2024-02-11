require('dotenv').config();
const {MongoClient} = require('mongodb')

async function dbConnection() {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri)
    try {
        await client.connect()
        console.log("\tconnnection success")
        const db = client.db('movies')
        const collection = db.collection('details')
        var data = await collection.find().toArray();
        return data
    }
    catch(error){
        console.log("\tconnection failed")
    }
    finally {
        client.close();
    }
}

async function olderUser() {
    const uri = 'mongodb+srv://users:cBjjKFAATXdjMuVP@cluster0.pdeg90c.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri)
    try {
        await client.connect()
        console.log("\tconnnection success")
        const db = client.db('users')
        const collection = db.collection('details')
        var data = await collection.find().toArray()
        return data
    }
    catch(error){
        console.log("\tconnection failed")
    }
}

module.exports = {dbConnection,olderUser};