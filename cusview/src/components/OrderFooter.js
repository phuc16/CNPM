import './OrderFooter.css';

export default function OrderFooter(props){
    function submitClick(){
        alert('SUBMIT clicked');
    }
    return(
        <div className="order-footer">
            <div className="total-cost">
                <span style={{textAlign: 'left'}}>Total Cost:</span>
                <span style={{textAlign: 'center'}}>{props.totalQuantity}</span>
                <span style={{textAlign: 'right'}}>{props.totalCost}$</span>
                <span></span>
            </div>
            <div className="confirm">
                <button onClick={() => submitClick()}>SUBMIT ORDER</button>
            </div>
        </div>
    );
}