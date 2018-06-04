interface IDataProvider<T> {
    add(item: T): Promise<T>;
    find(key: String, value: Object): Promise<T[]>;
    findById(id: Object): Promise<T>;
    delete(search: Object): void;
}

export {
    IDataProvider
}