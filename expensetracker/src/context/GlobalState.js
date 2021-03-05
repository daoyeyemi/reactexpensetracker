import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial state
const initialState = {
    transactions : [
        { id: 1, text: "Flowers", amount: -7 },
        { id: 2, text: "Notebook", amount: -5 },
        { id: 3, text: "Donation", amount: +20 }
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
        type: "DELETE_TRANSACTION",
        payload: id
    })
}

    return (
    <GlobalContext.Provider 
        value={{
        transactions: state.transactions,
        deleteTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}