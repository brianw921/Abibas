const initialState = {
    currentUser: {}
}

export default (state = initialState , action) => {
    switch(action.type) {
        case 'LOGIN_USER':
        console.log("WHAT IS THE OBJECT", action.payload)
        return {...state, currentUser: action.payload}
    default:
        return state
    };
}