
import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions:[
        {id: 1, description: "Project 1 Income", transactionAmount: 10000},
        {id: 2, description: "Project 2 Income", transactionAmount: 20000},
        {id: 3, description: "Project 1 salary", transactionAmount: 2500},
        {id: 4, description: "Project 2 salary", transactionAmount: 5000}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}