"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Root"] = 0] = "Root";
    UserRole[UserRole["SuperAdmin"] = 1] = "SuperAdmin";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["Regular"] = 3] = "Regular";
})(UserRole || (UserRole = {}));
exports.UserRole = UserRole;
class User extends BaseEntity_1.BaseEntity {
    constructor(role) {
        super();
        if (role) {
            this.role = role;
        }
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setEmail(email) {
        this.email = email.toLocaleLowerCase();
        return this;
    }
    setRole(role) {
        this.role = role;
        return this;
    }
    setActive(active) {
        this.active = active;
        return this;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    setUpdateAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
exports.User = User;
class RootUser extends User {
    constructor() {
        super(UserRole.Root);
    }
}
exports.RootUser = RootUser;
class SuperAdmin extends User {
    constructor() {
        super(UserRole.SuperAdmin);
    }
}
exports.SuperAdmin = SuperAdmin;
class AdminUser extends User {
    constructor() {
        super(UserRole.Admin);
    }
}
exports.AdminUser = AdminUser;
class RegularUser extends User {
    constructor() {
        super(UserRole.Regular);
    }
}
exports.RegularUser = RegularUser;
class UserBuilder {
    build(role) {
        switch (role) {
            case UserRole.Root:
                return new RootUser();
            case UserRole.SuperAdmin:
                return new SuperAdmin();
            case UserRole.Admin:
                return new AdminUser();
            default:
                return new RegularUser();
        }
    }
}
exports.UserBuilder = UserBuilder;
//# sourceMappingURL=UserDomain.js.map