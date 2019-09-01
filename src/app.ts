import * as express from "express";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as users from "../routes/api/users";
import * as keys from "../config/keys";
import { connect, connection } from "mongoose";
import * as passportAny from "../config/passport";
// const mongoose = require("mongoose");
const app = express();
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURIlocal;
// const db = require("./config/keys").mongoURI;
// Connect to MongoDB

connection.on('error', err => { console.error('%s', err) })
    .on('close', (error) => {
        console.log(error);
    })
connect(keys.mongoURIlocal, { useCreateIndex: true, useNewUrlParser: true }, function (err) {
    if (err) {
        return Promise.reject(err)
    }
    console.log('Mongo db connected')
})

// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config

// Routes
app.use("/api/users", users);





const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));