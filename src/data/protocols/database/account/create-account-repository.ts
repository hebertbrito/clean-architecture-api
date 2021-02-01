import { CreateAccountModel } from '../../../../domain/usecases/createAccount'
import { AccountModel } from "../../../../domain/models/account";

export interface CreateAccountRepository {
    add(acccountData: CreateAccountModel): Promise<AccountModel>
}