import {DataType, ResponseType} from "./type";
import axios from "axios";



const token = "2c1d2206b1d628e0c7799b488a9cd76e79d3e96e";

const settings = {
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json",
        'Authorization': "Token " + token,
    }
}
const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    ...settings
})

export const addressAPI = {
    findAddress(value: string) {
        return instance.post<ResponseType<DataType>>('', JSON.stringify({query: value})).then(res => res.data.suggestions)
    }
}

