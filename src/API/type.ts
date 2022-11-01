export type DataType = {
    "value": string,
    "unrestricted_value": string,
    "data": unknown
}

export type ResponseType<D> = {
    suggestions: Array<D>
}