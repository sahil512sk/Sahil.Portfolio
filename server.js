require('dotenv').config({ quiet: true });
require("./connectDB");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connectDB");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("portfolio"));

async function startServer() {
  const db = await connectDB();

  app.get("/users", async (req, res) => {
    try {
      const users = await db.collection("users").find().toArray();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Something went wrong" });
    }
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
}

startServer();


// const express = require("express");
// const { MongoClient } = require("mongodb");

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri);
// const app = express();

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("✅ MongoDB connected");
//     return client.db("myFirstDB");
//   } catch (err) {
//     console.error("❌ MongoDB connection failed", err);
//     process.exit(1);
//   }
// }

// async function startServer() {
//   await connectDB();

//   app.listen(3000, () => {
//     console.log("Server started on port 3000");
//   });
// }

// startServer();