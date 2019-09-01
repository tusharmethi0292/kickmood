"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EmojiSchema = new mongoose_1.Schema({
    moodIcon: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Emoji = mongoose_1.model("emoji", EmojiSchema);
//# sourceMappingURL=emoji.js.map