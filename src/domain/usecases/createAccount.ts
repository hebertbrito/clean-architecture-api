import { AccountModel } from '../models/account'

export interface CreateAccountModel{
    firstname: string,
    cpf_cnpj: string,
    email: string,
    password: string,
    address: {
        state: string,
        CEP: string,
        city: string,
        number: string,
        neighbourhood: string,
        country: string,
        street: string
    },
    avatarsource: {}
}

export interface CreateAccount {
    add(account: CreateAccountModel): Promise<AccountModel>
}