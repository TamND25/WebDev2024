const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

if (!MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in .env file");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { dbName: DATABASE_NAME, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Schema for topAskerList
const topAskerListSchema = new mongoose.Schema({
    askers: [
        {
            id: String,
            name: String,
            field: String,
            image: String,
            link: String
        }
    ]
});
const TopAskerList = mongoose.model("TopAskerList", topAskerListSchema, "topAskerList");

// Fetch topAskerList
app.get("/askers", async (req, res) => {
    try {
        const data = await TopAskerList.findOne({}, { askers: 1, _id: 0 }); // Fetch only the askers array

        if (data && data.askers) {
            res.json(data.askers); // Send only the askers array
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error("Error fetching askers:", error);
        res.status(500).json({ error: "Failed to fetch askers" });
    }
});

const questionSchema = new mongoose.Schema({
    question: [
        {
            id: String,
            image: String,
            title: String,
            tags: [String],
            answer: Number,
            created_time: Date,
            updated_time: Date,
            author: String,
            field: String,
            upvotes: Number
        }
    ]
});
const questions = mongoose.model("questions",questionSchema,"questions")

app.get("/questions", async (reg, res)  =>  {
    try {
        const data = await questions.findOne({}, { question: 1, _id: 0 });
        if  (data && data.question) {
            res.json(data.question);
        }   else    {
            res.json([])
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch questions" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
