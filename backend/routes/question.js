const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/", async (reg, res)  =>  {
    try {
        const data = await Question.findOne({}, { question: 1, _id: 0 });
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

module.exports = router;