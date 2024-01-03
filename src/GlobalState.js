import React, { createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// Declare an initial state
const initialState = {
    // All we really need are the transactions as we can calculate everything
    // else from that
    transactions: [
        { id: 1, text: 'Groceries', amount: -100 },
        { id: 2, text: 'Salary', amount: 500 },
        { id: 3, text: 'TV', amount: -200 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });

    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });

    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}