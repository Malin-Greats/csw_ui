// third-party
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import React, {createContext, useReducer} from "react";
// import Reducer from './Reducer'
import { persistStore } from 'redux-persist';
import memberReducer from './reducer'
// project imports
import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
const initialState = {
    members: [],
    error: null
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});

const Store = ({children}) => {
    const [state, dispatch] = useReducer(memberReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};


// const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persister = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;
const Context = createContext(initialState);


export { Store, store, persister, Context, dispatch, useSelector, useDispatch };
