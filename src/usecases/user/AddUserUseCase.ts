import { IDataProvider } from "../../boundaries";
import { IUser } from "../../domains";


export class AddUserUseCase {

    public constructor(
        private dataProvider: IDataProvider<IUser>
    ) {}

    public execute(user: IUser) : Promise<IUser> {
        console.info(`Trying to add an user: ${user}`);
        return this.dataProvider.add(user);
    }
}