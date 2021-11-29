
const themeReducer = (state=1,action) => {
    if (action.type === 'NEXT') {
        return action.payload;
    }

    return state;
}

export default themeReducer;