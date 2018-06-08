import { IDataProvider } from "../../boundaries";
import { IUser } from "../../domains";
import { Logger } from "../../infrastructure";


export class AddUserUseCase {

    public constructor(
        private dataProvider: IDataProvider<IUser>
    ) {}

    public execute(user: IUser) : Promise<IUser> {
        Logger.log(`Trying to add an user: ${user}`);
        return this.dataProvider.add(user);
    }
}