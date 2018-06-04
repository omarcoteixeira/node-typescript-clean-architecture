"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRoute {
    render(req, res, view, options) {
        //add constants
        res.locals.BASE_URL = "/";
        //add title
        res.locals.title = this.title;
        //render view
        res.render(view, options);
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=BaseRoute.js.map