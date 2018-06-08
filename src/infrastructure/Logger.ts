import { namespace } from "../config";

const debug = require('debug')(namespace)

export class Logger {
    public static log(message: string) {
        debug(message);
    }
}