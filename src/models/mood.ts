import { Schema, Document, model } from 'mongoose';

export interface IMood extends Document {
    moodIcon: string,
    date: string
}

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

export let Mood = model<IMood>("moods", MoodSchema);