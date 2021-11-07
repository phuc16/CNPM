import './OrderItem.css';

export default function OrderItem(props){
    const {imgUrl, name, quantity, pricePU} = props;

    return(
        <div className="orderItem">
            <img src= {imgUrl} alt=''/>
            <span className="name">{name}</span>
            <span style={{textAlign: 'center'}}>{quantity}</span>
            <span style={{textAlign: 'right'}}>{pricePU}$</span>
        </div>
    );
}
