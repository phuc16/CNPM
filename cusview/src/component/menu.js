import React from 'react';
import "./menu.css"
export default function Menu(props){


  const { ImgLink, Name, description, Price, addItemToCart } = props;
    return (
      <div>
        <li class="main-product">
          <div class="img-product">
          <img class="card-img-top" src= {window.location.origin + '/img/' + ImgLink} alt=''/>
          </div>
          <div class="content-product">
              <h3 class="content-product-h3">{Name}</h3>

              <div class="content-product-deltals">
                  <div class="price">
                      <span class="money">{Price}$</span>
                  </div>
                  <button type="button" class="btn btn-cart" onClick={addItemToCart}>Add</button>
              </div>
          </div>
        </li>
      </div>

    );
}
