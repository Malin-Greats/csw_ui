// action - state management
import { LOGIN, LOGOUT, REGISTER } from './actions';

// ==============================|| ACCOUNT REDUCER ||============================== //

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
    member: null
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: {
            const { user } = action.payload;
            return {
                ...state,
                user
            };
        }
        case LOGIN: {
            const { user } = action.payload;
            const { member } = action.payload;
            return {
                ...state,
                isLoggedIn: true,
                isInitialized: true,
                user,
                member
            };
        }
        case LOGOUT: {
            console.log('LOGOUT CASE')
            return {
                ...state,
                isInitialized: true,
                isLoggedIn: false,
                user: null
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default accountReducer;
