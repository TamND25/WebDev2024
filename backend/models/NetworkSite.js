const mongoose = require("mongoose")

const networkSiteSchema = new mongoose.Schema({
    networkSite: [
        {
            id: String,
            href: String,
            name: String,
            imgScr: String,
            altText: String
        }
    ]
});

module.exports = mongoose.model("networksite", networkSiteSchema, "topNetworkSite")