interface IStorageProvder {
    upload(path: string, buffer: any) : void;
}

export {
    IStorageProvder
}