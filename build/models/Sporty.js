"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SportySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users"
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    img: { data: Buffer, contentType: String },
    likes: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "users"
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "users"
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            img: { data: Buffer, contentType: String },
            likes: [
                {
                    user: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: "users"
                    }
                }
            ],
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Sporty = mongoose_1.model("sporty", SportySchema);
//# sourceMappingURL=Sporty.js.map