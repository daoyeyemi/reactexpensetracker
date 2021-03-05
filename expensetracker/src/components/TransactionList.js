import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
    
    const { transactions } = useContext(GlobalContext);

    // console.log(context);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                <Transaction />))}
                
            </ul>
        </div>
    )
}

export default TransactionList;