import { Schema, Document, model } from 'mongoose';

export interface IEmoji extends Document {
    moodIcon: string,
    date: string
}

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

export let Emoji = model<IEmoji>("emoji", EmojiSchema);