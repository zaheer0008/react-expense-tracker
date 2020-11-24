import React from 'react'

export const AddTransaction = () =>{
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" placeholder="Detail of Transaction"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="tranactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" placeholder="Doller value of transaction"></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}