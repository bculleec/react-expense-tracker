import { useState, useContext } from "react"
import React from 'react'
import { GlobalContext } from "../GlobalState";

export const AddTransaction = () => {

  const [text, setText] = useState('');  
  const [amount, setAmount] = useState(0);  

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount
    }

    addTransaction(newTransaction);

  }

  return (
    <>
        <h3>Add transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text' className="transaction-name">Transaction Name</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label htmlFor='amount' className="transaction-amount">Amount <br/>
                (negative - expense, positive - income)
                </label>
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
