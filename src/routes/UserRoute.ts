import { Request, Response, Router } from "express";

import { AddUserUseCase } from '../usecases';
import { UserBuilder, UserRole, IUser } from '../domains';
import { MongoDataProvider } from "../providers";
import BaseRoute from './BaseRoute';


class UserRoute extends BaseRoute {
    
    public static create(router: Router) {
        console.log("[UserRoute::create] Creating user route.");
        const userRoute = new UserRoute();
    
        router.get("/", (req: Request, res: Response) => {
            userRoute.index(req, res);
        });

        router.post("/", (req: Request, res: Response) => {
            userRoute.add(req, res);
        });
    }

    public index(request: Request, response: Response): void {
        response
            .status(200)
            .send("Use API.");
    }

    public add(request: Request, response: Response): void {
        const userRequest = request.body.user;

        new AddUserUseCase(
            new MongoDataProvider<IUser>()
        ).execute(
            new UserBuilder()
            .build(UserRole.Regular)
            .setName(userRequest.name)
            .setEmail(userRequest.email)
            .setActive(true)
        ).then((user) => {
            response
                .status(200)
                .send(`User ${user.name} created successfully.`);
        }).catch((reason) => {
            response
                .status(400)
                .send(`A unexpected error happens on try to add an user. ${reason}`);
        });
    }
}

export {
    UserRoute
}