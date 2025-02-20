const mongoose = require("mongoose");

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

module.exports = mongoose.model("Question",questionSchema)