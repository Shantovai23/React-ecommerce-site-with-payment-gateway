const cors = require("cors");
const express = require("express");
// const stripe = require("stripe")("sk_test_51ITpDVLiXRZbyrOFsVOABo6nPMXnFTNevBI7hGNrALpHfCfCjglgIB6709loBaoOOtqdXsOuWgV1dsf85QX9B5CC00fANYSwG4");
// const { uuid }  = require("uuid/v4");
const stripe = require("stripe")("sk_test_3bFivefJDiBEOZdfECa5YJsr00P0Uyy98A");



const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = Math.random();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
    console.log(status);
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(5000);
