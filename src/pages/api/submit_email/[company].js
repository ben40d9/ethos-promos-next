import { MongoClient, ServerApiVersion } from "mongodb";

//will hide the dbName but does not matter atm
const dbName = "emails";

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const { company } = req.query; // Get the company name from the route parameters

      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(company); // Use the company name to determine the collection

      await collection.insertOne({ email });

      client.close();
      res.status(200).send("Email submitted successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
