import './OrderFooter.css';

export default function OrderFooter(props){
    function comfirmClick(){
        alert('Comfirm clicked');
    }
    return(
        <div className="order-footer">
            <div className="total-cost">
                <span></span>
                <span style={{textAlign: 'center'}}>Total Cost:</span>
                <span style={{textAlign: 'right'}}>{props.totalCost}$</span>
            </div>
            <div className="confirm">
                <button onClick={() => comfirmClick()}>Confirm Customer Order</button>
            </div>
        </div>
    );
}