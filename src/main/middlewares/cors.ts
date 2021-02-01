import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, resp: Response, next: NextFunction): void => {
    resp.set('access-control-allow-origin', '*')
    resp.set('access-control-allow-headers', '*')
    resp.set('access-control-allow-methods', '*')
    next()
}