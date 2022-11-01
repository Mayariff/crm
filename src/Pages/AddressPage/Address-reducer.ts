import {DataType} from "../../API/type";
import {ActionsType} from "./types";


const initialState: Array<DataType> = []

export const addressReducer = (state: Array<DataType> = initialState, action: ActionsType): Array<DataType> => {
    switch (action.type) {
        case 'addressReducer/SET-ADDRESSES':
            return action.addresses
        default:
            return state
    }
}

// actions
export const setAddressAC = (addresses: Array<DataType>) => ({type: 'addressReducer/SET-ADDRESSES', addresses} as const)
