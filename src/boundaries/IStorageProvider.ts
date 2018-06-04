interface IStorageProvder {
    upload(path: String, buffer: any) : void;
}

export {
    IStorageProvder
}