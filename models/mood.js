const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoodSchema = new Schema({
    moodIcon: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Mood = mongoose.model("moods", MoodSchema);