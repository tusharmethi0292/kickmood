import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  date: string
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export let User = model<IUser>("User", UserSchema);