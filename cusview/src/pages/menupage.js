import React, { Component } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from '../component/menu';


const menuItems =
        [
                {imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg',
                 name: 'PIZZA MIXED', description: 'PIZZA', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                {imgUrl: 'http://farm1.staticflickr.com/955/41117503084_128499c414.jpg',
                 name: 'BUGGER MIXED', description: 'BUGGER', pricePU: 4.8},
                 {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                {imgUrl: 'https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg',
                 name: 'SOUP MIXED', description: 'SOUP', pricePU: 4.8},
                 {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                 {imgUrl: 'https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg',
                 name: 'CAKE', description: 'DESSERT', pricePU: 4.8},
                {imgUrl: 'https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg',
                 name: 'COFFEE CAKE', description: 'DESSERT', pricePU: 4.8},
                {imgUrl: 'https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg',
                 name: 'TIRAMISU CAKE', description: 'DESSERT', pricePU: 4.8},
                {imgUrl: 'https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg',
                 name: 'STRAWBERRY ICE-DREAM', description: 'DESSERT', pricePU: 4.8},
                 {imgUrl: 'https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg',
                 name: 'STRAWBERRY ICE-DREAM', description: 'DESSERT', pricePU: 4.8}
                
        ];

const MenuPage = () => {
    return (
      <div className="App">        
        <MyNavbar />   
        <Slide />
        <Category /> 
          <div className="content">

            <div className="product-list">
              
                {
                    menuItems.map((item) => (
                      <Menu
                        imgUrl={item.imgUrl}
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        pricePU={item.pricePU}
                      />
                      )
                    )
                
                }
              
            </div>
          </div>
        
      </div>
    );
  }

export default MenuPage