import * as express from "express";
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import { UserRoute } from "./routes";

class App {

    public express: express.Express;
    
    constructor() {
        this.express = express();
        this.midleware();
        this.routes();
    }

    private midleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();

        UserRoute.create(router);

        this.express.use(router);
    }

}

export default new App().express;