export class InvalidParamError extends Error {
    constructor(paramName: any) {
        super(`Inavalid param: ${paramName}`)
        this.name = 'InavalidParamError'
    }
}