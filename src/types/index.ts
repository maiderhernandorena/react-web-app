/**
 * @param T type to use . Default to string
 * 
 * Object with params of type T
 */
export type Object<T = string> = {
    [key: string]: T
}

/**
 * Object with params of type string
 */
export type ObjectString_1 = {
    [key: string]: string
}

/**
 * Object with params of type string because as default has string
 */
export type ObjectString_2 = Object

/**
 * Object with params of type string
 */
export type ObjectString_3 = Object<string>


/**
 * @param T type to use . Default to string
 * 
 * Array with params of type T
 */
export type Arrays_1<T = string> = Array<T>
export type Arrays_2<T = string> = T[]


/**
 * @param T type to use
 */
export type Maybe<T> = T | null
  

/**
 * Layout type, with width and height
 */
export type Layout = {
    width?: string
    height?: string
}


/**
 * Coords type, with x and y
 */
export type Coords = {
    x?: string
    y?: string
}