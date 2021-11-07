import React, { useState } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

const menuItems = [
  {
    id: 1,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 2,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 3,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 4,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 5,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 6,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 7,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 8,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 9,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 10,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 11,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 12,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 13,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 14,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 15,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 16,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 17,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 18,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 19,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 20,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 21,
    imgUrl:
      "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
    name: "CAKE",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 22,
    imgUrl:
      "https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg",
    name: "COFFEE CAKE",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 23,
    imgUrl:
      "https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg",
    name: "TIRAMISU CAKE",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 24,
    imgUrl:
      "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
    name: "STRAWBERRY ICE-DREAM",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 25,
    imgUrl:
      "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
    name: "STRAWBERRY ICE-DREAM",
    category: "OTHER",
    pricePU: 4.8,
  },
];

export default function MenuPage() {
  const [curMenu, setCurMenu] = useState(menuItems);

  function reset(event){
    event.preventDefault();
    setCurMenu(menuItems);
  }

  function filterPizza(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "PIZZA"));
  }

  function filterBurger(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "BURGER"));
  }

  function filterSoup(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "SOUP"));
  }

  function filterTea(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "TEA"));
  }

  function filterOther(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "OTHER"));
  }

  return (
    <div className="App">
      <MyNavbar />
      <Slide />
      <Category reset={reset} pizza={filterPizza} burger={filterBurger} soup={filterSoup} tea={filterTea} other={filterOther} />
      <div className="content">
        <div className="product-list">
          <CartContext.Consumer>
            {({ addItemToCart }) =>
              curMenu.map((item) => (
                <Menu
                  key={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  category={item.category}
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
