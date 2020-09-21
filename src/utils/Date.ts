export const getDate = (): Date => {
    return new Date()
}

export const getDateString = (): string => {
    return getDate().toDateString()
}