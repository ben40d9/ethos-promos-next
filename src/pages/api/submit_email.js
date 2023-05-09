// import { MongoClient, ServerApiVersion } from "mongodb";

// // const { MongoClient } = require("mongodb");
// // const { ServerApiVersion } = require("mongodb");
// import dotenv from "dotenv";
// dotenv.config();

// // Define the MongoDB URI and database name
// const uri =
//   "mongodb+srv://databaseCred:OiyLEH13saTRKkup@emailcapture.kwgdj1x.mongodb.net/?retryWrites=true&w=majority";

// // const uri = process.env.MONGODB_URI;

// const dbName = "emails";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export default async (req, res) => {
//   if (req.method === "POST") {
//     try {
//       const { email } = req.body;

//       await client.connect();
//       const db = client.db(dbName);
//       const collection = db.collection("namecheap");

//       await collection.insertOne({ email });

//       client.close();
//       res.status(200).send("Email submitted successfully");
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Something went wrong");
//     }
//   } else {
//     res.status(405).send("Method Not Allowed");
//   }
// };
