// third-party
import { createSlice } from '@reduxjs/toolkit';
import useAuth from 'hooks/useAuth';

// project imports
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    members: [],
    member: {}
};

const memberReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEMBERS':
            return {
                ...state,
                members: action.payload
            };
        case 'ADD_MEMBER':
            return {
                ...state,
                members: state.members.concat(action.payload)
            };
        case 'REMOVE_MEMBER':
            return {
                ...state,
                members: state.members.filter(member => member.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default memberReducer;