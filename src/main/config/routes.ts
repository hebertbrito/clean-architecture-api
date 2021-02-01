import { Express } from 'express'
import signupRouter from '../routers/signup'
export function routes (app: Express): void {
    app.use("/api", signupRouter)
}