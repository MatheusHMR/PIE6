// const mongoose = require("mongoose");

// const dbUrl = 'mongodb+srv://MatheusHMR:UgTZRaETuTHGCo2Y@clusterteste.x27fupa.mongodb.net/?retryWrites=true&w=majority';

// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

// mongoose.connect(dbUrl, connectionParams).then(() => {
//     console.info("Connected to the DB");
// }).catch((e) => {
//     console.log("Error:", e);
// });


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MatheusHMR:UgTZRaETuTHGCo2Y@clusterteste.x27fupa.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
