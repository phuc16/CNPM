import './TransactionsFooter.css';

export default function TransactionFooter(props){
    function comfirmClick(){
        alert('Comfirm payment clicked');
    }
    return(
        <div className="Transaction-footer">
            <div className="confirm">
                <button onClick={() => comfirmClick()}>Confirm Customer Payment</button>
            </div>
        </div>
    );
}