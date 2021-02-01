import { Express } from 'express'
import { bodyParser, cors, contentType } from '../middlewares'

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(cors)
    //force json in header
    app.use(contentType)
}