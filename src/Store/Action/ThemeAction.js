export const themeActionNext = (num) => {
    return {
        type: 'NEXT',
        payload: num
    }
}

export const themeActionPrev = (num) => {
    return {
        type: 'PREV',
        payload: num
    }
}