
interface IBaseEntity {
    toJson(): any;
}

class BaseEntity implements IBaseEntity {

    toJson() : any {
        return JSON.parse(JSON.stringify(this));
    }
}

export {
    IBaseEntity,
    BaseEntity
}