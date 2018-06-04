import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { IDataProvider } from '../../../boundaries'
import { AddUserUseCase } from '../../../usecases';
import { UserBuilder, UserRole, IUser } from '../../../domains';

describe('Add User', () => {

    it('Should add an User', async () => {
        const userDataProviderStub = <IDataProvider<IUser>>{
            add(item: IUser) {
                return Promise.resolve(item);
            }
        };
        const spy = sinon.spy(userDataProviderStub, 'add');

        const userName = 'Test User';
        const result = await new AddUserUseCase(userDataProviderStub).execute(
            new UserBuilder()
                .build(UserRole.Regular)
                .setName(userName)
                .setEmail('root@dividite.com.br')
                .setActive(true)
        );

        expect(result.name).to.equal(userName);
        expect(spy.calledOnce).is.true;
    });

});