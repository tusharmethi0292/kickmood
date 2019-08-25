const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const SportySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
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
        ref: "User"
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

    module.exports = Sporty = mongoose.model("profile", SportySchema);