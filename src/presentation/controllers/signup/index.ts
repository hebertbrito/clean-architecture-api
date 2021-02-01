import { HttpRequest, HttpResponse, Controller, CreateAccount } from './protocols'
import { MissingParamError, InvalidParamError, ServerError } from '../../errors'
import { badRequest, serverError, ok } from '../../helpers/http'

export class SignUpController implements Controller {

    private readonly createAccount: CreateAccount

    constructor(createAccount: CreateAccount) {
        this.createAccount = createAccount
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {

            const {
                firstname,
                email,
                password,
            } = httpRequest.body

            const account = await this.createAccount.add({ email, firstname, password })

            return ok(account)

        } catch (error) {
            return serverError(error)
        }
    }
}