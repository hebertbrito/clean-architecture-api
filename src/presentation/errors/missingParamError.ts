export class MissingParamError extends Error {
    constructor(paramName: any) {
        super(`Missing param: ${paramName}`)
        this.name = 'MissingParamError'
    }
}