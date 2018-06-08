import { IDataProvider } from "../../boundaries";
import { BaseEntity } from "../../domains/BaseEntity";

class MongoDataProvider<T extends BaseEntity> implements IDataProvider<T> {
    add(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    find(key: string, value: Object): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: Object): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(search: Object): void {
        throw new Error("Method not implemented.");
    }
}

export {
    MongoDataProvider
}