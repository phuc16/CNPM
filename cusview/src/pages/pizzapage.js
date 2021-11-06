import React from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

const pizzaItems = [
  {
    id: 1,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FcLA4E243tz95qfRgB1644sV4l5JQqstuT9_YQebG0Y4kcAKJxgFDA-HeQoGqQ_4Gvg&usqp=CAU",
    name: "PIZZA MIXED",
    description: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 2,
    imgUrl:
      "https://top10tphcm.com/wp-content/uploads/2021/04/nhung-thuong-hieu-pizza-ngon-tphcm.jpg",
    name: "PIZZA MIXED",
    description: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_6WoLKcvX1Yto0d1STn0TCFSdDJlXFynRfdhi9G9j8Ro4nOrGP8qP9HVh86-6InJT94&usqp=CAU",
    name: "PIZZA MIXED",
    description: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FcLA4E243tz95qfRgB1644sV4l5JQqstuT9_YQebG0Y4kcAKJxgFDA-HeQoGqQ_4Gvg&usqp=CAU",
    name: "PIZZA MIXED",
    description: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 5,
    imgUrl:
      "https://s1.img.yan.vn/YanNews/2167221/201607/20160707-042802-2_600x337.jpg",
    name: "PIZZA MIXED",
    description: "PIZZA",
    pricePU: 4.8,
  },
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
            {({ addItemToCart }) =>
              pizzaItems.map((item) => (
                <Menu
                  key={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  category={item.category}
                  description={item.description}
                  pricePU={item.pricePU}
                  addItemToCart={() => addItemToCart(item)}
                />
              ))
            }
          </CartContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
