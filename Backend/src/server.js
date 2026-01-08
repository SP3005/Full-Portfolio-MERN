const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("Mongo error:", err));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
