import React, { Component } from 'react';

import TransactionHeader from './components/TransactionsHeader';
import TransactionBody from './components/TransactionsBody';
import TransactionFooter from './components/TransactionsFooter';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableId: 1,
            paymentId: '0D123456',
            bank: 'OCB',
        };
    }

    render(){
        return(
            <div className="content">
                <TransactionHeader 
                    tableId={this.state.tableId}
                    paymentId={this.state.paymentId}
                    bank={this.state.bank}
                />
                <TransactionBody />
                <TransactionFooter/>
            </div>
        );
    };
}

export default Transactions;

