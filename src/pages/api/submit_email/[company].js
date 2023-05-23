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

      var msg = {
        to: `${email}`, // Change to your recipient
        from: "ben@ethospromos.com", // Change to your verified sender
        subject: `Welcome to Ethos Promos - Special Offer from ${company}`,
        text: `Hello,

Thank you for your interest in ${company}!

We are excited to share a special offer from ${company} with you. Click the link below to explore what ${company} has to offer and take advantage of this exclusive deal.

${"https://golfpartner.sjv.io/ethosPromos"} 

We hope you enjoy this special offer. If you have any questions or need further assistance, please don't hesitate to contact us.

Best,
The Ethos Promos Team`,
        html: `<p>Hello,</p>

<p>Thank you for your interest in ${company}!</p>

<p>We are excited to share a special offer from ${company} with you. Click the link below to explore what ${company} has to offer and take advantage of this exclusive deal.</p>

<a href="${"https://golfpartner.sjv.io/ethosPromos"}">Click here for your special offer from ${company}</a>

<p>We hope you enjoy this special offer. If you have any questions or need further assistance, please don't hesitate to contact us.</p>

<p>Best,<br>
The Ethos Promos Team</p>`,
      };

      //send email
      await sendEmail(msg);

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
