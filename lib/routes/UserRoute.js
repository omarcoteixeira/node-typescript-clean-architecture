"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usecases_1 = require("../usecases");
const domains_1 = require("../domains");
const providers_1 = require("../providers");
const BaseRoute_1 = require("./BaseRoute");
class UserRoute extends BaseRoute_1.default {
    static create(router) {
        console.log("[UserRoute::create] Creating user route.");
        const userRoute = new UserRoute();
        router.get("/", (req, res) => {
            userRoute.index(req, res);
        });
        router.post("/", (req, res) => {
            userRoute.add(req, res);
        });
    }
    index(request, response) {
        response
            .status(200)
            .send("Use API.");
    }
    add(request, response) {
        const userRequest = request.body.user;
        new usecases_1.AddUserUseCase(new providers_1.MongoDataProvider()).execute(new domains_1.UserBuilder()
            .build(domains_1.UserRole.Regular)
            .setName(userRequest.name)
            .setEmail(userRequest.email)
            .setActive(true)).then((user) => {
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
exports.UserRoute = UserRoute;
//# sourceMappingURL=UserRoute.js.map