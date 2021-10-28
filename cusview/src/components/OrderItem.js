import './OrderItem.css';

import remove from './img/remove.png';

export default function OrderItem(props){
    const { imgUrl, name, quantity, pricePU, removeProduct } = props;

    return(
        <div className="orderItem">
            <img src= {imgUrl} alt=''/>
            <span className="name">{name}</span>
            <span style={{textAlign: 'center'}}>{quantity}</span>
            <span style={{textAlign: 'right'}}>{pricePU}$</span>
            <img className="remove" src={remove} onClick={removeProduct} alt='' />
        </div>
    );
}
