function authReducer(state, action) {
    switch (action.type) {
        case 'logout':
            return { ...state, user: null, isError: false, isAuthenticated: false };
        case 'login':
            return { ...state, user: action.payload, isError: false, isAuthenticated: true }
        case 'reject':
            return { ...state, isError: action.payload }
        default:
            return state;
    }
}

export default authReducer;