import express from 'express'
import { adapterRouter } from '../adapters/express'
import { signUpController } from '../factories/signup'

const routerSignUp = express.Router()

routerSignUp.post("/signup", adapterRouter(signUpController))

export default routerSignUp