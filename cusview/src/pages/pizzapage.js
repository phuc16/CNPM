import React from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from '../component/menu';

import { CartContext } from '../contexts/Cart';

const pizzaItems =
        [
          {id: 1, imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
            name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
          {id: 2, imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
            name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
          {id: 3, imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
            name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
          {id: 4, imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
            name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
          {id: 5, imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
            name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8}
                
        ];

const PizzaPage = () => {
    return (
      <div className="App">        
        <MyNavbar />   
        <Slide />
        <Category /> 
          <div className="content">

            <div className="product-list">
              <CartContext.Consumer>
                {({ addItemToCart }) =>(
                    pizzaItems.map((item) => (
                      <Menu
                        key = {item.id}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        pricePU={item.pricePU}
                        addItemToCart={() => addItemToCart(item)}
                      />
                      )
                    )
                  )
                }
              </CartContext.Consumer>
            </div>
          </div>
        
      </div>
    );
  }

export default PizzaPage