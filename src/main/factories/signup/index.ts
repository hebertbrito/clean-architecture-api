import { DbCreateAccount } from '../../../data/usecases/create-account'
import { BcryptAdapter } from '../../../infra/criptography/bcryptAdapter'
import { AccountFirebaseRepository } from '../../../infra/database/firebase/accountRepository'
import { SignUpController } from '../../../presentation/controllers/signup'
import { Controller, HttpRequest, HttpResponse } from '../../../presentation/protocols'

class SignUpFactory implements Controller {

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const response: HttpResponse = {
            body: httpRequest.body,
            statusCode: 200
        }

        return response
    }
}
const salt = 12
const bcryptAdapter = new BcryptAdapter(salt)
const accountFirebaseRepository = new AccountFirebaseRepository()
const dbCreateAccount = new DbCreateAccount(bcryptAdapter, accountFirebaseRepository)
export const signUpController = new SignUpController(dbCreateAccount)
// export const signUpFactory = new SignUpFactory()