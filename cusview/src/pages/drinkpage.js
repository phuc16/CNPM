import React, { Component } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from '../component/menu';

const drinkItems =
        [
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8},
                {imgUrl: 'https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg',
                 name: 'PEACH TEA', description: 'TEA', pricePU: 4.8}
                
        ];

const DrinkPage = () => {
    return (
      <div className="App">        
        <MyNavbar />   
        <Slide />
        <Category /> 
          <div className="content">

            <div className="product-list">
              
                {
                    drinkItems.map((item) => (
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

export default DrinkPage