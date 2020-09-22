/**
 * @param message type any passed. Default to string
 * 
 * @returns Promise with passed value type. Defaults to string
 * 
 * @example
 * promiseFunc_1<number>(20) = Will return numeric value
 */
export function promiseFunc_1<T = string>(message: T): Promise<T> {
    return Promise.resolve(message)
}


/** 
 * @param message  type string
 * 
 * @returns Promise with string value
 */
export const promiseFunc_2 = (message: string): Promise<string> => {
    return Promise.resolve(message)
}

export default { promiseFunc_1, promiseFunc_2 }