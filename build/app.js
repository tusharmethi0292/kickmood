"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("../routes/api/users");
const keys = require("../config/keys");
const mongoose_1 = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
mongoose_1.connection.on('error', err => { console.error('%s', err); })
    .on('close', (error) => {
    console.log(error);
});
mongoose_1.connect(keys.mongoURIlocal, { useCreateIndex: true, useNewUrlParser: true }, function (err) {
    if (err) {
        return Promise.reject(err);
    }
    console.log('Mongo db connected');
});
app.use(passport.initialize());
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
//# sourceMappingURL=app.js.map