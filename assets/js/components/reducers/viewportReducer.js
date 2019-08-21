function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                ...action.params,
            };
        default:
            return state;
    }
}

export default reducer;
