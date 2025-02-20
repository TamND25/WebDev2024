const express = require("express");
const router = express.Router();
const asker = require("../models/topAsker");

router.get("/", async (req, res) => {
    try {
        const data = await asker.findOne({}, { askers: 1, _id: 0 }); // Fetch only the askers array
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

module.exports = router;