import { AccountModel } from '../models/account'

export interface CreateAccountModel{
    firstname: string,
    email: string,
    password: string,
}

export interface CreateAccount {
    add(account: CreateAccountModel): Promise<AccountModel>
}