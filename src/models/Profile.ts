import { Schema, Document, model } from 'mongoose';

export interface IProfile extends Document {
  user: string,
  username: string,
  website: string,
  location: string,
  company: string,
  date: string
}

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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

export let Profile = model<IProfile>("profile", ProfileSchema);