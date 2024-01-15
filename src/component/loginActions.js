// action for successful login
export const loginSuccess = () => {
    return {
        type: 'LOGIN_SUCCESS',
    };
};

// action for logout
export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
    };
};
