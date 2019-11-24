import { BaseRoute } from './routes';
import { ProfileRoute } from './profile';
import { UserRouter } from './users';

export class ApiRoutes extends BaseRoute {
    public static path = '/api';
    private static instance: ApiRoutes;

    private constructor() {
        super();
        this.init();
    }

    static get router() {
        //applying singleton method to create only one instance of the router class
        if (!ApiRoutes.instance) {
            ApiRoutes.instance = new ApiRoutes();
        }
        return ApiRoutes.instance.router;
    }

    public init() {

        // Route handler for the Admin routes
        this.router.use(ProfileRoute.path, ProfileRoute.router);
        this.router.use(UserRouter);



        this.router.use(function (err, req, res, next) {
            try {
                // if (err.isBoom) {
                //     return sendResp(res, { message: MESSAGES.ERROR.FIELD_VALIDATION_FAILED, result: err.output.payload.message || {} });
                // }
                if (err.isBoom) {
                    // let msg = '';
                    // msg = joiErrorFormatter(err);
                    // console.log("msg: ", msg);
                    // msg = msg.replace(/"/g, "'");
                    // global.log("msg: ", err.output.payload.message);
                    return {} // sendResp(res, { message: MESSAGES.ERROR.FIELD_VALIDATION_FAILED, result: { msg: err.output.payload.message } });
                }
                return{} // handleError(res, err);
            } catch (err) {
                return {} //handleError(res, err);
            }
        });
    }
}