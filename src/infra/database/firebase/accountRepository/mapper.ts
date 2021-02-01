import { AccountModel } from "../../../../domain/models/account";

export const map = (accountData: any, id?: string): AccountModel => {
    const response = {
        id: id,
        ...accountData
    }

    return response;
}