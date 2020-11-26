import React, { useContext } from 'react'
import { GlobalContext } from '../state/GlobalState'

const Balance = ()=>{
    const {transactions} = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, amount)=>(acc+=amount),0).toFixed(2);
    return(
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}
export default Balance