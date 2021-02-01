import { Controller, HttpRequest } from '../../../presentation/protocols'
import { Request, Response } from 'express'

export const adapterRouter = (controller: Controller) => {
    return async (req: Request, resp: Response) => {
        const HttpRequest: HttpRequest = {
            body: req.body
        }
        const httpResponse = await controller.handle(HttpRequest)

        if (httpResponse.statusCode === 200) {
            resp.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
            resp.status(httpResponse.statusCode).json(httpResponse.body.message)
        }

    }
}