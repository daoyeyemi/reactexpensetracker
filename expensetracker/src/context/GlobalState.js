import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
    transactions : [
        { id: 1, text: "Flower", amount: -7 },
        { id: 2, text: "Notebook", amount: -5 },
        { id: 3, text: "Donation", amount: 20 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = () => {
    
}