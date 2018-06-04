import { Request, Response } from "express";

abstract class BaseRoute {
    protected title: string;

    public render(req: Request, res: Response, view: string, options?: Object) {
        //add constants
        res.locals.BASE_URL = "/";

        //add title
        res.locals.title = this.title;
    
        //render view
        res.render(view, options);
    }
}

export default BaseRoute;