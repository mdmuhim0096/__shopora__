const strip = require("stripe");
require("dotenv").config();
console.log(process.env.STRIPKEY)
const Stripe = new strip(process.env.STRIPKEY);
module.exports = Stripe;