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

export const signUpFactory = new SignUpFactory()