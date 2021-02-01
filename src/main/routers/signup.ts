import express from 'express'
const routerSignUp = express.Router()

routerSignUp.get("/signup", async (req, res)=>{
    res.json("ok")
})


export default routerSignUp