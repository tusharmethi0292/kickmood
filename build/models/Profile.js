"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    company: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Profile = mongoose_1.model("profile", ProfileSchema);
//# sourceMappingURL=Profile.js.map