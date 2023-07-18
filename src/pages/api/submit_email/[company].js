import { MongoClient, ServerApiVersion } from "mongodb";
import sendEmail from "../../../utils/sendEmail";
import "dotenv/config";

const dbName = "emails";

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Define a dictionary for affiliate links
const affiliateLinks = {
  namecheap: "https://namecheap.pxf.io/5g53bD",
  nordvpn: "https://nordvpn.sjv.io/ethosPromos",
  gizmogo: "https://gizmogo.pxf.io/ethosPromos",
  golfpartner: "https://golfpartner.sjv.io/ethosPromos",
  // Add more companies and their affiliate links here
};

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const { company } = req.query;

      await client.connect();

      const db = client.db(dbName);
      const collection = db.collection(company);

      await collection.insertOne({ email });

      //Will change the default affiliate link to the ethospromos link when server is live
      const affiliateLink =
        affiliateLinks[company] || "https://default-affiliate-link";

      var msg = {
        to: `${email}`,
        from: "ben@ethospromos.com",
        subject: `Welcome to Ethos Promos - Special Offer from ${company}`,
        text: `Hello,

Thank you for your interest in ${company}!

We are excited to share a special offer from ${company} with you. Click the link below to explore what ${company} has to offer and take advantage of this exclusive deal.

${affiliateLink} 

We hope you enjoy this special offer. If you have any questions or need further assistance, please don't hesitate to contact us.

Best,
The Ethos Promos Team`,
        html: `<p>Hello,</p>

<p>Thank you for your interest in ${company}!</p>

<p>We are excited to share a special offer from ${company} with you. Click the link below to explore what ${company} has to offer and take advantage of this exclusive deal.</p>

<a href="${affiliateLink}">Click here for your special offer from ${company}</a>

<p>We hope you enjoy this special offer. If you have any questions or need further assistance, please don't hesitate to contact us.</p>

<p>Best,<br>
The Ethos Promos Team</p>`,
      };

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
