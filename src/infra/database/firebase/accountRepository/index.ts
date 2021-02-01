import { CreateAccountRepository } from "../../../../data/protocols/database/account/create-account-repository";
import { AccountModel } from "../../../../domain/models/account";
import { CreateAccountModel } from "../../../../domain/usecases/createAccount";
import { FirebaseHelper } from "../helpers";

export class AccountFirebaseRepository implements CreateAccountRepository {
    
    async add(accountData: CreateAccountModel): Promise<AccountModel> {
        const collection = await (await FirebaseHelper.getFirestore()).collection('tb_user');
        const _id = await (await collection.add(accountData)).id
        return FirebaseHelper.map(accountData, _id)
    }
}