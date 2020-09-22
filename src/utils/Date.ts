/**
 * @returns Date
 */
export const getDate = (): Date => {
    return new Date()
}

/**
 * @returns date on string format
 */
export const getDateString = (): string => {
    return getDate().toDateString()
}