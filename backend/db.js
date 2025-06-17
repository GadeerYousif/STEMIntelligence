// db.js
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let cachedDb = null;

async function connecToDatabase() {
  if (cachedDb) return cachedDb;

  await client.connect();
  console.log("✅ Connected to MongoDB");

  const db = client.db("tutoring"); // <--- name your DB here (adjust if needed)
  cachedDb = db;
  return db;
}

module.exports = connecToDatabase;
