import React from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

const menuItems = [
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
  {
    id: 6,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 7,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 8,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 9,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 10,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BUGGER MIXED",
    description: "BUGGER",
    pricePU: 4.8,
  },
  {
    id: 11,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 12,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 13,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 14,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 15,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    description: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 16,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    description: "TEA",
    pricePU: 4.8,
  },
  {
    id: 17,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    description: "TEA",
    pricePU: 4.8,
  },
  {
    id: 18,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    description: "TEA",
    pricePU: 4.8,
  },
  {
    id: 19,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    description: "TEA",
    pricePU: 4.8,
  },
  {
    id: 20,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    description: "TEA",
    pricePU: 4.8,
  },
  {
    id: 21,
    imgUrl:
      "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
    name: "CAKE",
    description: "DESSERT",
    pricePU: 4.8,
  },
  {
    id: 22,
    imgUrl:
      "https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg",
    name: "COFFEE CAKE",
    description: "DESSERT",
    pricePU: 4.8,
  },
  {
    id: 23,
    imgUrl:
      "https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg",
    name: "TIRAMISU CAKE",
    description: "DESSERT",
    pricePU: 4.8,
  },
  {
    id: 24,
    imgUrl:
      "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
    name: "STRAWBERRY ICE-DREAM",
    description: "DESSERT",
    pricePU: 4.8,
  },
  {
    id: 25,
    imgUrl:
      "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
    name: "STRAWBERRY ICE-DREAM",
    description: "DESSERT",
    pricePU: 4.8,
  },
];

const MenuPage = () => {
  return (
    <div className="App">
      <MyNavbar />
      <Slide />
      <Category />
      <div className="content">
        <div className="product-list">
          <CartContext.Consumer>
            {({ addItemToCart }) =>
              menuItems.map((item) => (
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

export default MenuPage;
