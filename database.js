const { MongoClient } = require("mongodb");

// const url = 'mongodb+srv://kanchiChauhan:Ammajibekaarhain@namastenode.pkyks.mongodb.net/';
// const url = 'mongodb+srv://kanchiChauhan:Ammajibekaarhain@namastenode.pkyks.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode';
var url = "mongodb://kanchiChauhan:Kanchi123@namastenode-shard-00-00.pkyks.mongodb.net:27017,namastenode-shard-00-01.pkyks.mongodb.net:27017,namastenode-shard-00-02.pkyks.mongodb.net:27017/?ssl=true&replicaSet=atlas-e1k457-shard-0&authSource=admin&retryWrites=true&w=majority&appName=NamasteNode";

const client = new MongoClient(url); 

const dbName = 'HelloWorld';

async function main() {
    await client.connect();
    console.log('connected successfully')
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        firstname: 'Pranshul',
        lastname: 'Agarwal',
        city: 'Mumbai'
    }

    // CRUD Operations

    // Write
    // const insertResults = await collection.insertMany([data]);
    // console.log('Insert Results', insertResults);

    // // Read
    // const findCollection = await collection.find({}).toArray();
    // console.log('Database results', findCollection)

    // // Find
    // const findOneItem = await collection.find({firstname: 'kanchi'}).toArray();
    // console.log('filtered data', findOneItem)

    // // Find all docs as firstname pranshul
    //  const result = await collection.find({firstname: 'Pranshul'});
    //  console.log(result)

    // // UPDATE - updateOne/updateMany
    //  const updateResult = await collection.updateMany({firstname: 'Rohan'}, { $set: { firstname: 'Pranshul' } })
    //  console.log(updateResult);

    // // DELETE
    //     const deleteResult = await collection.deleteOne({firstname: "Pranshul"})
    //     console.log(deleteResult);

    return 'done'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())