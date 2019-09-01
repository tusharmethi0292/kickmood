"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MoodSchema = new mongoose_1.Schema({
    moodIcon: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Mood = mongoose_1.model("moods", MoodSchema);
//# sourceMappingURL=mood.js.map