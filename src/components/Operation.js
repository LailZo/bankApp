import React, {useState, Component } from 'react';
import Transactions from './Transactions';

export default function Operation(props){

    const [vendor, setVendor] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('')
    const[transactions, setTransactions] = useState(props.data)
     
    
   
const submitValue = (e) => {
    e.preventDefault();
    const tranDetails = 
    {
        'amount' : e.currentTarget.id== 'withdraw' ? amount*-1 : amount,
        'vendor' : vendor,
        'category' : category
    }
    setTransactions(transactions =>[...transactions, tranDetails])
    console.log(transactions)
    
    }



        return( 
        <div>
            <form >
            <input name="vendor"  type="text" placeholder="Vendor" onChange={e=> setVendor(e.target.value)} />
            <input name= "category" type="text" placeholder="Category" onChange={e=> setCategory(e.target.value)}  />
            <input name= "amount" type="text" placeholder="amount" onChange={e=> setAmount(e.target.value)}  />
            <button id='deposit' onClick={submitValue}>deposit</button>
            <button id='withdraw' onClick={submitValue}>withraw</button>
            </form>

            
            <Transactions  deleteTransaction={props.deleteTransaction} data={props.data} />

        </div> );
    
}
 
