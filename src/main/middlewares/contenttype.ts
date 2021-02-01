import { Request, Response, NextFunction } from 'express'

export const contentType = (req: Request, resp: Response, next: NextFunction): void => {
    resp.type('json')
    next()
}