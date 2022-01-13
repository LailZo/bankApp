import React, { Component } from 'react';
import Transaction from './Transaction';
class Transactions extends Component {
    constructor() {
        super();
        this.state = { data: [] }
    }

    componentDidMount() {
        this.setState({ data: this.props.data })
    }

    render() {
        let data = this.props.data

        return (<div>
            {data.map((t) => <Transaction deleteTransactionTransactions={this.props.deleteTransactionOperation} id={t.vendor} key={t.amount} t={t} />)}
        </div>);

    }
}

export default Transactions;