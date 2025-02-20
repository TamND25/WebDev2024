const express = require("express");
const router = express.Router();
const networkSite = require("../models/NetworkSite");

router.get("/", async (reg, res)  =>  {
    try {
        const data = await networkSite.findOne();
        if  (data) {
            res.json(data);
        }   else    {
            res.json([])
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch questions" });
    }
});

module.exports = router;