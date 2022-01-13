import React, { Component } from 'react';

class Transaction extends Component {
    constructor() {
        super();
        this.state = {}
    }


    deleteTransaction = () => {
        this.props.deleteTransactionTransactions(this.props.t)

    }

    render() {
        let t = this.props.t
        return (<div>
            <div>{t.amount}</div>
            <div>{t.vendor}</div>
            <div>{t.category}</div>
            <button id={t.amount} onClick={this.deleteTransaction}>Delete</button>
        </div>);
    }
}

export default Transaction;