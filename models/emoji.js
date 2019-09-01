const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmojiSchema = new Schema({
    moodIcon: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Emoji = mongoose.model("emoji", EmojiSchema);