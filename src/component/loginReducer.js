const initialState = {
    isLoggedIn: false, // initialise state for user login status
};

// reducer function to manage the login state
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state, 
                isLoggedIn: true,  // sets login status to true once login successful
            };
        case 'LOGIN_FAILURE':
        case 'LOGOUT_USER':
            return {
                ...state,
                isLoggedIn: false  // set login status to false once login failure or logout occurs
            };
        default: 
            return state;
    }
};

export default loginReducer;