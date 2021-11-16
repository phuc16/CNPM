import Modal from './modal.js';
import { Link } from 'react-router-dom';
import Textfield from '@atlaskit/textfield';

export default function PaymentModal (props) {
    return (
        <Modal show={props.show} handleClose={props.invalid}>
            <div className="online_payment_body">
                <div className="online_item">
                    <p>Bank</p>
                    <Textfield name='Bank' placeholder='Bank name'>
                    </Textfield>
                </div>
                <div className="online_item">
                    <p>Branch</p>
                    <Textfield name='Branch' placeholder='Branch'>
                    </Textfield>
                </div>
                <div className="online_item">
                    <p>Card Number</p>
                    <Textfield name='Card Number' placeholder='Card Number'>
                    </Textfield>
                </div>
                <div className="button-div">
                    <Link to="/cart/payment/bill">
                    <button className="BlueButton" onClick={props.valid}> Valid </button>
                    </Link>
                    
                    <button className="BlueButton" onClick={props.invalid}> Invalid </button>
                </div>
            </div>
            
        </Modal>
    );
};
