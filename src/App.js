import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Transactions from './components/Transactions';
import Operation from './components/Operation';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // { amount: 3200, vendor: "Elevation", category: "Salary" },
        // { amount: -7, vendor: "Runescape", category: "Entertainment" },
        // { amount: -20, vendor: "Subway", category: "Food" },
        // { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }


  async componentDidMount() {
      const {data: data} = await axios.get("http://localhost:3001/transactions");
    console.log(data)
    this.setState({data})
  }


  deleteTransaction =async transaction => {
    const trans =await axios.delete("http://localhost:3001/transactions" + '/' + transaction)
    const transactions = this.state.data.filter(t=> t.amount != transaction.amount)
    this.setState({data : transactions})
    console.log(trans)
  }


  addTransaction=async (transaction)=>{
    // let transactions = [...this.state.data]
    // transactions.push(transaction)
    // this.setState({data:transactions})
    const {data: transition} = await axios.post("http://localhost:3001/transactions", transaction)
    const datas = [transition, ...this.state.data]
    this.setState({data: datas})
  }


  
  calBalance = () => {
    var total_sum = this.state.data.reduce(function (prev, cur) {
      return prev + cur.amount;
    }, 0);

  }

  render() {
    var data = [...this.state.data]
    let sum = 0
    for (let i = 0; i < this.state.data.length; i++) {
      sum += this.state.data[i].amount
    }

    return (
      <div className="App">

        <h1>Balance</h1>
        {sum}

        <Operation addTransaction={this.addTransaction} deleteTransactionApp={this.deleteTransaction} data={this.state.data} />

        <Router>
          <Switch>
            <Route exact path="/transactions"> <Operation /> </Route>
            <Route exact path="/" element={<Operation  addTransaction={this.addTransaction} deleteTransactionApp={this.deleteTransaction} data={this.state.data} />} />
          </Switch>
        </Router>






      </div>
    );
  }
}

export default App;