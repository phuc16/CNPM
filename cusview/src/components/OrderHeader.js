import './OrderHeader.css';

export default function OrderHeader(props){
    return(
        <div className="order-header">
            <div className="info">
                <h1 style={{textAlign: 'left'}}>TABLE ID: {props.tableId}</h1>
                <h1 style={{textAlign: 'right'}}>ORDER ID: {props.orderId}</h1>
            </div>
            {
                props.productQuantity > 0 && <div className="attribute">
                    <span style={{textAlign: 'left'}}>Food Names</span>
                    <span style={{textAlign: 'center'}}>Quantities</span>
                    <span style={{textAlign: 'right'}}>Price Per Unit</span>
                </div>
            }
        </div>
    );
}