const mongoose = require("mongoose");

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

module.exports = mongoose.model("asker",topAskerListSchema,"topAskerList")