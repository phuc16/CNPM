import React, { Component } from 'react';

import PaymentHeader from '../components/PaymentHeader';
import PaymentBody from '../components/PaymentBody';


class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '20/10/2021',
            time: '6:29:00 PM',
            tableId: 1,
            orderId: 'OD123456',
            paymentId: '0D123456',
            totalCost: "119$"
        };
    }

    render(){
        return(
            <div className="content">
                <PaymentHeader 
                    date={this.state.date}
                    time={this.state.time}
                    tableId={this.state.tableId}
                    orderId={this.state.orderId}
                    paymentId={this.state.paymentId}
                    totalCost={this.totalCost}
                />

                <PaymentBody />

            </div>
        );
    };
}


export default Payment;