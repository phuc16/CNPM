import './TransactionsHeader.css';

export default function TransactionHeader(props){
    function detailClick(){
        alert('Payment Detail Clicked');
    }

    return(
        <div className="transaction-header">
            <div className="detail">
                <button onClick={() => detailClick()}>Online Paymment Detail</button>
            </div>
            <div className="info">
                <h1 style={{textAlign: 'left'}}>TABLE ID: {props.tableId}</h1>
                <h1 style={{textAlign: 'center'}}>PAYMENT ID: {props.paymentId}</h1>
                <h1 style={{textAlign: 'right'}}>BANK: {props.bank}</h1>
            </div>
        </div>
    );
}