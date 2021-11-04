import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableId: 1,
            orderId: '0D123456',
            cartItems:
            [
                {id: 1, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 1, pricePU: 4.8},
                {id: 2, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 2, pricePU: 4.8},
                {id: 3, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 2, pricePU: 4.8},
                {id: 4, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 3, pricePU: 4.8},
                {id: 5, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 4, pricePU: 4.8},
                {id: 6, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 5, pricePU: 4.8},
                {id: 7, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
                 name: 'PIZZA MIXED', quantity: 1, pricePU: 4.8}
            ],
        };

        this.removeProduct = this.removeProduct.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.submit = this.submit.bind(this);
    }

    getTotalCost(){
        let total = this.state.cartItems.reduce((sum, item) => sum + item.pricePU * item.quantity, 0)
        total = total.toFixed(2);
        return total;
    }
    
    getTotalQuantity(){
        return this.state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    changeQuantity(item, change){
        const quantity = change === 'add' ? item.quantity + 1 : (item.quantity <= 1 ? 1 : item.quantity - 1)
        const { cartItems } = this.state;
        const index = cartItems.indexOf(item);
        this.setState({
            cartItems: [
                ...cartItems.slice(0 , index),
                {...item, quantity : quantity},
                ...cartItems.slice(index + 1)
            ]
        });
    }

    removeProduct(item){
        const { cartItems } = this.state;
        const index = cartItems.indexOf(item);
        this.setState({
            cartItems: [
                ...cartItems.slice(0 , index),
                ...cartItems.slice(index + 1)
            ]
        });
    }

    submit(){
        alert(`Product: ${this.state.cartItems.length}, quantity: ${this.getTotalQuantity()}. View console 4 detail`);
        this.state.cartItems.map((item) => console.log(item));
    }

    //addItemToCart(item){
    //}

    render(){
        return(
            <CartContext.Provider
                value = {{
                    tableId: this.state.tableId,
                    orderId: this.state.orderId,
                    cartItems: this.state.cartItems,
                    totalCost: this.getTotalCost(),
                    totalQuantity: this.getTotalQuantity(),
                    changeQuantity: this.changeQuantity,
                    removeProduct: this.removeProduct,
                    submit: this.submit
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}