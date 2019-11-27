
import { connect, connection as DB } from 'mongoose';
import * as express from "express";
import * as cors from 'cors';
import * as helmet from 'helmet';
import { createServer } from 'http';
import * as bodyParser from "body-parser";
import * as passport from "passport";
// import { Router } from "./routes/api/users";
import { ApiRoutes } from './routes/api'
import { keys } from "./config/keys";
import * as path from 'path';
// import * as models from "./models";
// import * as passportAny from "../config/passport";
import { CONSTANT } from "./constant/constant";


class App {
    constructor() {
        this.app = express();
        this.server = createServer(this.app);
        this.initDependency();
        this.initializeMongo();
        this.routes();
    }

    public app: express.Application;
    public server: any;

    private initDependency(): void {
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
            //res.setHeader('X-Frame-Options', 'ALLOWALL');
            //res.setHeader('X-Frame-Options', 'allow-from http://localhost:4200');
            next();
        });
        this.app.use(cors());
        this.app.use(helmet());
        //this.app.use(helmet.frameguard());
        // this.app.use(helmet.frameguard({
        //     action: 'allow-from',
        //     domain: 'https://api.shifa.care/'
        // }))
        this.logger();
        this.errorHandler();
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(express.static(path.join(__dirname, '../public'))); //creating public folder router

        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    private routes(): void {
        console.log('-------------------------------------------fassfdsafdfdsaf--', path.join(__dirname, "../adminbuild/dist/angular-rcc"));

        this.app.use(ApiRoutes.path, ApiRoutes.router);

        this.app.get(['/login', '/login/*'], (req, res) => {
            return res.sendFile(path.join(__dirname, "../adminbuild/dist/angular-rcc"));
        });

        this.app.use("/", express.static(path.join(__dirname, "../adminbuild/dist/angular-rcc")));

        this.app.use((req, res) => {
            res.status(CONSTANT.HTTP_STATUS_CODE.URL_NOT_FOUND).json(CONSTANT.HTTP_RESPONSED.INVALID_URL_RESPONSE);
        });
        // this.app.use(passport.initialize());



    }

    private logger(): void {
        this.app.use(function (req: Request, res: Response, next) {
            // res.locals.startTime = Date.now();
            // console.log('--------------------------------request Details----------------------------------------', req.originalUrl);
            console.log('Req Type', req.method);
            // console.log('Req IP', req.connection.remoteAddress)
            console.log('auth-token', req.headers['auth-token']);
            console.log('authorization', req.headers['authorization']);
            console.log('user-agent', req.headers['user-agent']);
            console.log('Host', req.headers['host']);
            console.log('Req Body stringigy', JSON.stringify(req.body));
            console.log('Req body', req.body);
            // console.log('Req Params', req.params);
            // console.log('Req Query', req.query);
            console.log('-----------------------------------------ENDS------------------------------------------');
            next();
        });
    }

    private errorHandler(): void {
        this.app.use((err, req, res, next) => {
            console.error(err);
            res.status(err.status || CONSTANT.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
            return res.json({
                success: false,
                message: err.message,
                result: {},
                statusCode: err.status
            });
        })
    }

    private initializeMongo() {
        DB.on('error', err => { console.error('%s', err) })
            .on('close', (error) => {
                console.log(error);
            })
        connect(keys.mongoURIlocal, { useCreateIndex: true, useNewUrlParser: true, autoCreate: true }, function (err) {
            if (err) {
                return Promise.reject(err)
            }
            console.log('Mongo db connected')
        })
    }
}
// const mongoose = require("mongoose");
// const app = express();
// Bodyparser middleware
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );
// app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURIlocal;
// const db = require("./config/keys").mongoURI;
// Connect to MongoDB



// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Passport middleware
// app.use(passport.initialize());
// Passport config

// Routes
// app.use("/api/users", Router);





// app.use("/api", router);
// app.use("/api", Routes.ProfileRoute);
// app.use("/api", Routes.UserRouter);




const app = new App();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.app.listen(port, () => console.log(`Server up and running on port ${port} !`));


// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });