"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.express = express();
        this.midleware();
        this.routes();
    }
    midleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        const router = express.Router();
        routes_1.UserRoute.create(router);
        this.express.use(router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map