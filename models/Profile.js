const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProfileSchema = new Schema({
    user : {
       type : mongoose.Schema.Types.ObjectId ,
       ref : 'User'
       },

    username : {
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

    })

    module.exports = Profile = mongoose.model("profile", ProfileSchema);