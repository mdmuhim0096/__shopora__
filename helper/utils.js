// ✅ Fixed: use environment variable so Stripe redirects work in production
const clientUrl = process.env.CLIENT_URL || "http://localhost:9000";
module.exports = { clientUrl };