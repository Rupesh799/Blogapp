const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rupeshkhatri:rupeshkhatri@cluster0.cwcp9jf.mongodb.net/myblog?retryWrites=true&w=majority"; // <-- copy from your .env
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("myblog"); // <-- use your DB name
    const posts = db.collection("posts");
    const result = await posts.updateMany(
      { $or: [ { userEmail: null }, { userEmail: { $exists: false } } ] },
      { $unset: { userEmail: "" } }
    );
    console.log(`Updated ${result.modifiedCount} documents.`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);