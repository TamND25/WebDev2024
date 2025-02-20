const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const questionRoutes = require("./routes/question");
const topAskerRoutes = require("./routes/topAsker")
const topNetworkSites = require("./routes/networkSite")
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/questions", questionRoutes);
app.use("/askers", topAskerRoutes);
app.use("/networksites", topNetworkSites);

const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

if (!MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in .env file");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { dbName: DATABASE_NAME, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
