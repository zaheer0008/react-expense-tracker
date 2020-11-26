import React, { useContext } from 'react'
import { GlobalContext } from '../state/GlobalState'
import {Transaction} from './Transaction'

export const TransactionHistory = () =>{
    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(trans =>(
                    <Transaction key={trans.id} transaction={trans} />
                ))}
            </ul>
        </div>
    )
}