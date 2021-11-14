import './PaymentHeader.css';

export default function PaymentHeader(props) {
    return ( 
        <div class = "Payment-header" >
            <div class = "payment-info">
                <h4> Date: {props.date} </h4>
                <h4> Time: {props.time} </h4> 
                <h4> Table No: {props.TableNo} </h4> 
                <h4> Total Cost: {props.totalCost} $ </h4>
	        </div> 
            <div class = "sub_info" >
                
        	</div>
	    </div>
    );
}