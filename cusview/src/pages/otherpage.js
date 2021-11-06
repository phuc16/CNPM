import React, { Component } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/Category';

import Menu from '../component/menu';

import { CartContext } from '../contexts/Cart';

const otherItems =
        [
          {id: 21, imgUrl: 'https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg',
            name: 'CAKE', description: 'DESSERT', pricePU: 4.8},
          {id: 22, imgUrl: 'https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg',
            name: 'COFFEE CAKE', description: 'DESSERT', pricePU: 4.8},
          {id: 23,imgUrl: 'https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg',
            name: 'TIRAMISU CAKE', description: 'DESSERT', pricePU: 4.8},
          {id: 24,imgUrl: 'https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg',
            name: 'STRAWBERRY ICE-DREAM', description: 'DESSERT', pricePU: 4.8},
          {id: 25, imgUrl: 'https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg',
            name: 'STRAWBERRY ICE-DREAM', description: 'DESSERT', pricePU: 4.8}
        ];

const OtherPage = () => {
    return (
      <div className="App">        
        <MyNavbar />   
        <Slide />
        <Category /> 
        <div className="content">

          <div className="product-list">
            <CartContext.Consumer>
              {({ addItemToCart }) =>(
                  otherItems.map((item) => (
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

export default OtherPage