import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions';
import Operation from './components/Operation';
import { BrowserRouter as Router, Route , Routes,Link, Switch } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }



  calBalance=()=>{
    var total_sum = this.state.data.reduce(function(prev, cur) {
      return prev + cur.amount;
}, 0);


  }

  deleteTransaction=(transaction)=>{
    let list = this.state.data
    console.log(list)
    let newList = list.filter((t)=> t.amount !== transaction.amount)
    this.setState({data: newList},function(){
        console.log(this.state.data)
    })}
  

  render()
  {
    var data = [...this.state.data]
    let sum=0
    for(let i=0; i<this.state.data.length; i++){
      sum+= this.state.data[i].amount
    }

  return(
    <div className="App">
      
      <h1>Balance</h1>
      {sum}

      <Operation deleteTransaction={this.deleteTransaction}  data={this.state.data}/>
      

      {/* <Router>
        <Switch>
        <Route exact path="/transition"> <Operation/> </Route>
        </Switch>
      </Router> */}
 
    

   

      
    </div>
  );
}
}

export default App;
