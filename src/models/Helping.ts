import { Schema, Document, model } from 'mongoose';

interface ILike {
  user: string
}

interface IComment {
  user: string,
  text: string,
  name: string,
  img: string,
  likes: ILike[],
  date: string
}

export interface IHelping extends Document {
  user: string,
  text: string,
  name: string,
  img: string,
  likes: ILike[],
  comments: IComment[],
  date: string
}


// Create Schema
const HelpingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  img:
    { data: Buffer, contentType: String },


  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      img:
        { data: Buffer, contentType: String },

      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
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

export let Helping = model<IHelping>("helping", HelpingSchema);