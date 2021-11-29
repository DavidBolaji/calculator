const DUMMY_DATA = {
    total: '',
}

const calcReducer = (state = DUMMY_DATA, action) => {
    if (action.type === 'NUM') {
        return {
            total: state.total + action.payload,
        }
    } else if (action.type === 'TOTAL') {
        return {
            total: String(action.payload),
        }
    } else if (action.type === 'UPDATE') {
        return {
            total: action.payload,
        }
    } else if (action.type === 'CLEAR') {
        return {
            total: '',
        }
    }

    return state;

}

export default calcReducer;