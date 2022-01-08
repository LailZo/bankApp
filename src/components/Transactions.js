import React, { Component } from 'react';
import Transaction from './Transaction';
 class Transactions extends Component {
     constructor(props) {
         super(props);
         this.state = { data :[]}
     }

        componentDidMount(){
            this.setState({data: this.props.data})
        }
 
         render(){ 
         let data = this.props.data
         
         console.log(this.props.data)
            debugger
         return (<div>
             {data.map((t)=> <Transaction deleteTransaction={this.props.deleteTransaction}  deleteTransaction={this.deleteTransaction} id={t.vendor} key={t.vendor} t={t} />)}
         </div>  );

     }
 }
  
 export default Transactions;