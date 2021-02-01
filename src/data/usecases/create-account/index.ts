import { CreateAccount, CreateAccountModel, AccountModel, Hasher, CreateAccountRepository } from './protocols'


export class DbCreateAccount implements CreateAccount {
    private readonly hasher: Hasher
    private readonly createAccountRespository: CreateAccountRepository
    constructor(hasher: Hasher, createAccountRespository: CreateAccountRepository) {
        this.hasher = hasher
        this.createAccountRespository = createAccountRespository
    }

    async add(account: CreateAccountModel): Promise<AccountModel> {
        const hashedPassword = await this.hasher.hash(account.password)
        const accountResponse = await this.createAccountRespository.add(Object.assign({}, account, { password: hashedPassword }))
        return accountResponse
    }
}