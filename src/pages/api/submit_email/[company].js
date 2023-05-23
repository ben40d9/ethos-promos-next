import { MongoClient, ServerApiVersion } from "mongodb";

import sendEmail from "../../../utils/sendEmail";

// import generateContent from "../../../utils/generateContent";

import "dotenv/config";

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

      // const content = await generateContent(company);
      const content =
        await `test here I am sending this email, to ${email}, inquiring about ${company} from the server`;

      var msg = {
        to: `${email}`, // Change to your recipient
        from: "ben@ethospromos.com", // Change to your verified sender
        subject: "I am Sending with SendGrid",
        text: `${content}`,
        html: "<strong>this is the new test</strong>",
      };

      //send email
      await sendEmail(msg, content);

      res.status(200).send("Email submitted successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong");
    } finally {
      await client.close();
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
