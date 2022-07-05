// third-party
import { createSlice } from '@reduxjs/toolkit';
import useAuth from 'hooks/useAuth';

// project imports
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    applications: [],
};

const slice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET CUSTOMERS
        getApplicationsSuccess(state, action) {
            state.applications = action.payload;
        },

    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
// const { url } = useAuth();

export function getApplications() {
    
    return async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const res = await fetch("https://uniquebackend.malingreatssmartsystems.co.zw/member/application-publish-list", requestOptions)
            const data = await res.json()
            dispatch(slice.actions.getApplicationsSuccess(data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}


