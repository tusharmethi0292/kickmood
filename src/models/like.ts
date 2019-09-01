import { Schema, Document, model } from 'mongoose';

export interface ILike extends Document {
    moodIcon: string,
    date: string
}

const LikeSchema = new Schema({
    moodIcon: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export let Likes = model<ILike>("likes", LikeSchema);