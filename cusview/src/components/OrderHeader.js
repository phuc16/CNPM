import './OrderHeader.css';
import { Link } from 'react-router-dom';

export default function OrderHeader(props){
    return(
        <div className="order-header">
            <div className="info">
                <Link to="/">
                <button type="button">
                    Return
                </button>
                </Link>
                <h1 style={{textAlign: 'left'}}>TABLE No: {props.tableId}</h1>
                
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