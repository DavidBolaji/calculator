export const showNum = (num) => {
    return {
        type: 'NUM',
        payload: num
    }
}

export const setTotal = (total) => {
    return {
        type: 'TOTAL',
        payload: total
    }
}

export const setSign = (sign) => {
    return {
        type: 'UPDATE',
        payload: sign
    }
}

export const clearAct = () => {
    return {
        type: 'CLEAR',
    }
}

