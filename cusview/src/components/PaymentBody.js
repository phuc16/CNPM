import './PaymentBody.css';
import Textfield from '@atlaskit/textfield';

export default function PaymentBody({openModal}){

    function PhysicalMethodClick(){
        alert('Cash method Clicked');
    }

    function OnlineMethodClick(){
        openModal();
    }

    return(
        <div className="PaymentBody">
            <div className="cash_confirm">
                <h2>Physical Payment</h2>
                <button onClick={() => PhysicalMethodClick()}>Confirm</button>
            </div>

            <div className="cash_confirm">
                <h2>Online Payment</h2>
                <button onClick={() => OnlineMethodClick()}>Confirm</button>
            </div>
        </div>
    );
}