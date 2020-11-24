import React, {useState} from 'react'

export const AddTransaction = () =>{
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input 
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)} 
                        placeholder="Detail of Transaction">
                     </input>
                </div>
                <div className="form-control">
                    <label htmlFor="tranactionamount">
                        Transaction Amount
                    </label>
                    <input 
                        type="number" 
                        id="transactionAmount"
                        value={transactionAmount}
                        onChange={(e)=> setTransactionAmount(e.target.value)} 
                        placeholder="Doller value of transaction">
                    </input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}