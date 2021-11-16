import React from 'react';
import "./menu.css"
export default function Menu(props){


  const { imgUrl, name, description, pricePU, addItemToCart } = props;
    return (
      <div>
        <li class="main-product">
          <div class="img-product">
          <img class="card-img-top" src= {imgUrl} alt=''/>
          </div>
          <div class="content-product">
              <h3 class="content-product-h3">{name}</h3>
              <h3 class="content-product-h3">{description}</h3>

              <div class="content-product-deltals">
                  <div class="price">
                      <span class="money">{pricePU}$</span>
                  </div>
                  <button type="button" class="btn btn-cart" onClick={addItemToCart}>Add to Cart</button>
              </div>
          </div>
        </li>
      </div>

    );
}