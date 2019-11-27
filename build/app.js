"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http_1 = require("http");
const bodyParser = require("body-parser");
const passport = require("passport");
const api_1 = require("./routes/api");
const keys_1 = require("./config/keys");
const path = require("path");
const constant_1 = require("./../src/constant/constant");
class App {
    constructor() {
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.initDependency();
        this.initializeMongo();
        this.routes();
    }
    initDependency() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            console.log("________________HIT________________");
            next();
        });
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
            next();
        });
        this.app.use(cors());
        this.app.use(helmet());
        this.logger();
        this.errorHandler();
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    routes() {
        console.log('-------------------------------------------fassfdsafdfdsaf--', path.join(__dirname, "../adminbuild/dist/angular-rcc"));
        this.app.use(api_1.ApiRoutes.path, api_1.ApiRoutes.router);
        this.app.get(['/login', '/login/*'], (req, res) => {
            return res.sendFile(path.join(__dirname, "../adminbuild/dist/angular-rcc"));
        });
        this.app.use("/", express.static(path.join(__dirname, "../adminbuild/dist/angular-rcc")));
        this.app.use((req, res) => {
            res.status(constant_1.CONSTANT.HTTP_STATUS_CODE.URL_NOT_FOUND).json(constant_1.CONSTANT.HTTP_RESPONSED.INVALID_URL_RESPONSE);
        });
    }
    logger() {
        this.app.use(function (req, res, next) {
            console.log('Req Type', req.method);
            console.log('auth-token', req.headers['auth-token']);
            console.log('authorization', req.headers['authorization']);
            console.log('user-agent', req.headers['user-agent']);
            console.log('Host', req.headers['host']);
            console.log('Req Body stringigy', JSON.stringify(req.body));
            console.log('Req body', req.body);
            console.log('-----------------------------------------ENDS------------------------------------------');
            next();
        });
    }
    errorHandler() {
        this.app.use((err, req, res, next) => {
            console.error(err);
            res.status(err.status || constant_1.CONSTANT.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
            return res.json({
                success: false,
                message: err.message,
                result: {},
                statusCode: err.status
            });
        });
    }
    initializeMongo() {
        mongoose_1.connection.on('error', err => { console.error('%s', err); })
            .on('close', (error) => {
            console.log(error);
        });
        mongoose_1.connect(keys_1.keys.mongoURIlocal, { useCreateIndex: true, useNewUrlParser: true, autoCreate: true }, function (err) {
            if (err) {
                return Promise.reject(err);
            }
            console.log('Mongo db connected');
        });
    }
}
const app = new App();
const port = process.env.PORT || 5000;
app.app.listen(port, () => console.log(`Server up and running on port ${port} !`));
//# sourceMappingURL=app.js.map