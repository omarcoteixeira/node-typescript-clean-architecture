import { AppNamespace } from "../config";

const debug = require('debug')(AppNamespace)

export class Logger {
    public static log(message: string) {
        debug(message);
    }
}