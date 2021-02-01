import express from 'express'
import { adapterRouter } from '../adapters/express'
import { signUpFactory } from '../factories/signup'

const routerSignUp = express.Router()

routerSignUp.post("/signup", adapterRouter(signUpFactory))

export default routerSignUp