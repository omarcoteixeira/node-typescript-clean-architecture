"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddUserUseCase {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
    }
    execute(user) {
        console.info(`Trying to add an user: ${user}`);
        return this.dataProvider.add(user);
    }
}
exports.AddUserUseCase = AddUserUseCase;
//# sourceMappingURL=add-user.usecase.js.map