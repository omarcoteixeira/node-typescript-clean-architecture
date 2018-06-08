import { IBaseEntity, BaseEntity } from "./BaseEntity";

enum UserRole {
    Root,
    SuperAdmin,
    Admin,
    Regular
}

interface IUser extends IBaseEntity {
    name: string,
    email: string
    role: UserRole,
    active: boolean,
    createdAt: number,
    updatedAt: number,
}

class User extends BaseEntity implements IUser {
    name: string;
    email: string;
    role: UserRole;
    active: boolean;
    createdAt: number;
    updatedAt: number;

    constructor(role?: UserRole) {
        super();
        if (role) {
            this.role = role;
        }
    }

    setName(name: string): User {
        this.name = name;
        return this;
    }

    setEmail(email: string): User {
        this.email = email.toLocaleLowerCase();
        return this;
    }

    setRole(role: UserRole): User {
        this.role = role;
        return this;
    }

    setActive(active: boolean): User {
        this.active = active;
        return this;
    }

    setCreatedAt(createdAt: number): User {
        this.createdAt = createdAt;
        return this;
    }

    setUpdateAt(updatedAt: number): User {
        this.updatedAt = updatedAt;
        return this;
    }
}

class RootUser extends User {
    constructor() {
        super(UserRole.Root);
    }
}

class SuperAdmin extends User {
    constructor() {
        super(UserRole.SuperAdmin);
    }
}

class AdminUser extends User {
    constructor() {
        super(UserRole.Admin);
    }
}

class RegularUser extends User {
    constructor() {
        super(UserRole.Regular);
    }
}

class UserBuilder {
    build(role?: UserRole): User {
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

export {
    IUser,
    User,
    UserRole,
    UserBuilder,
    RootUser,
    SuperAdmin,
    AdminUser,
    RegularUser
}