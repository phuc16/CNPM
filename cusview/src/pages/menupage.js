import React, { useState } from 'react';
import Slide from '../component/slide';
import MyNavbar from '../component/MyNavbar';
import Category from '../component/category';

import Menu from "../component/menu";

import { CartContext } from "../contexts/Cart";

const menuItems = [
  
  {
    id: 1,
    imgUrl: "https://www.timhortons.ph/upload/assets/XL7wKHalJnyIGEiGiyf1a1Q3ITkhddIX9ZaHb5fywgt992VjEA.jpg",
    name: "BAGEL B.E.L.T.",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 2,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/uq7HpA0wwr8Krxgba6Haj0NFhR8aVkW384LgTVAHiqum7xD9lA.png",
    name: "FARMER BREAKFAST WRAP",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 3,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/DrZwQsSdWQeuqwFSb393Oezkm5qg20R8UoNuaBYUzzc69FnZWv.jpg",
    name: "HAM AND CHEESE CROSSIANT",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 4,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/oDJSHJgjY5wJ98Y39NOWoUCfvjtFE6Y2tLjG6N8OqTGzlgmF0k.jpg",
    name: "SAUSAGE EGG & CHEESE MUFFIN",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 5,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/CtiaJbs6dSya7xVehaavX8iuYpoh9PZGQDF5Mpr2WUVmskFM8m.jpg",
    name: "BACON EGG & CHEESE MUFFIN",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 6,
    imgUrl: "https://www.timhortons.ph/upload/assets/LiP4I7rrZKD7hzf9JJa60DSMsbLKdAlxWM7QPIlxn72mIHRr4y.jpg",
    name: "SAUSAGE & CHEESE MUFFIN",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 7,
    imgUrl: "https://www.timhortons.ph/upload/assets/YkIkPNbguPzNEYPrUfTPFvz0MI2HnemuRWz7dWYMlnutfy5JKk.jpg",
    name: "HASH BROWN",
    category: "Breakfast",
    pricePU: 4.8,
  },
  {
    id: 8,
    imgUrl: "https://www.timhortons.ph/upload/assets/sYEacQcraFMEynXsykmPrGphjFApY7czbas3XiEAO1TIeeUQAY.jpg",
    name: "ITALIANO GRILLED BAGEL",
    category: "Lunch",
    pricePU: 4.8,
  },
  {
    id: 9,
    imgUrl: "https://www.timhortons.ph/upload/assets/aX3HKWg9lUWbR53eQDTolEPy2IBTY4bcbpJNGDfdRbZaqJHycq.jpg",
    name: "TUSCAN CHICKEN PANINI",
    category: "Lunch",
    pricePU: 4.8,
  },
  {
    id: 10,
    imgUrl: "https://www.timhortons.ph/upload/assets/cZx4pfT1T16SSOBZHdjyUz1xtQ47GU9AbNfzidXReTc2MA5DWv.jpg",
    name: "CHIPOTLE CHICKEN WRAP",
    category: "Lunch",
    pricePU: 4.8,
  },
  {
    id: 11,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/Qj0joZa35pR4ZisAakrq0AH67XaMdcMd7LYEA4SGUX0PTdewQA.jpg",
    name: "STEAK & CHEESE PANINI",
    category: "Lunch",
    pricePU: 4.8,
  },
  {
    id: 12,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/Pl6sQxm9zQpR9iA2bBKRQXgxZy2czKS6aeYNu19g6DJzWScSlc.jpg",
    name: "TUNA MELT",
    category: "Lunch",
    pricePU: 4.8,
  },
  {
    id: 13,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/VbbAbNb8Fjb8ZuyzcG693OSY2WseGQdYwGoBfYl91deeut2HPR.jpg",
    name: "ARTISAN GRILLED CHEESE",
    category:  "Lunch",
    pricePU: 4.8,
  },
  {
    id: 14,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/0gZ69YA6OSGU2u8jwm2OqufWQjQw5NjdkABdimRFv6I0JUnuhw.jpg",
    name: "CHICKEN BACON RANCH WRAP",
    category: "Lunch",
    pricePU: 4.8,
  },
  {
    id: 15,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/8i4G0WlZshMNYHrGeuzPdaE1L6qnOtuDS9xV0sA2f5E00aOWhQ.jpg",
    name: "CHOCOLATE DIP",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 16,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/XuJutewnGfL5nJ47fqBZlNKw2vILb74GOtxJL58ht7zCnIy3di.jpg",
    name: "BOSTON CREAM",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 17,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/eAxrmYSLFqxiPtqufq7jNmG4pOHB3MiBlXrCqbMEaLCqhgUaEf.jpg",
    name: "CHOCOLATE GLAZED",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 18,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/r898kCI5JVtYwPaMHzmGVNI8DBAVlRTuQ4QU6vupe4krOx4B8U.jpg",
    name: "DOUBLE CHOCOLATE FUDGE",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 19,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/GCmcrVJwZAtVBbU2ujt75qhxDRtL6drEHYRqSMuQxBTrxNrQY0.jpg",
    name: "CHOCOLATE ECLAIR",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 20,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/YG9n7xIN5u0TROAgk3oFtN83UrEpsie3lnuPqR9MQGof2vLBqu.jpg",
    name: "HONEY CRULLER",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 21,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/GVnpESyvl9VWs3ZS7kZgWyfq9jE8AuYPSeUNkl7gy6DK1Tl8k7.jpg",
    name: "BDAY CAKE TIMBIT",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 22,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/MBBDviVe8zP76EvMaLHl9YcxkaoPT7cxUTKisQqp5TER5DOuTv.jpg",
    name: "CHOCOLATE GLAZED TIMBIT",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 23,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/SiHBbWkZRzroBte8ZufuPbnmmqo6sZ3cwedweP9dM3RdhI3wiS.png",
    name: "CHOCOLATE FILLED TIMBIT",
    category: "Sweet",
    pricePU: 4.8,
  },
  {
    id: 24,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/2yQdfgNRyMxNMwDleZ3aDaHnWi3aWxDbcdojUiWqwWHsfLvFQg.jpg",
    name: "DOUBLE DOUBLE",
    category: "Drink",
    pricePU: 4.8,
  },
  {
    id: 25,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/2WiUpAIDBBB28QaCPY3vs7bcQAPGTiv0alREjkxoBh7gclBjrl.jpg",
    name: "CAPPUCINO",
    category: "Drink",
    pricePU: 4.8,
  },
  {
    id: 26,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/ed9T95qJ9ieWEheeKMCnKtzgreVtf6AySM4KgGZWm2YXtuLBtw.jpg",
    name: "FRENCH VANILA CAPPUCINO",
    category: "Drink",
    pricePU: 4.8,
  },
  {
    id: 27,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/XR1g0PBfrBkDpky0fmoLgaEzaWz2t3JFSOvLrgWtFgTtvdJsLp.jpg",
    name: "LATTE",
    category: "Drink",
    pricePU: 4.8,
  },
  {
    id: 28,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/MwrVM4uMgq8OJaZ1hvN58wzElaYm7kBbUwdOQxZaqH9HlZOWa1.jpg",
    name: "HOT CHOCOLATE",
    category: "Drink",
    pricePU: 4.8,
  },
  {
    id: 29,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/02yN12IfyTI6Ol7PdSkdN0TJvfuYXopRWis5GtqQcwx25EaohP.jpg",
    name: "CAFE MOCHA",
    category: "Drink",
    pricePU: 4.8,
  },
  {
    id: 30,
    imgUrl:
      "https://www.timhortons.ph/upload/assets/V5NSSRhu9bM4YqwV9boqNhrUTgny8DLVaNSw2JYqEk1ovvHuzF.jpg",
    name: "SPECIALITY TEA",
    category: "Drink",
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
    setCurMenu(menuItems.filter((product) => product.category === "Breakfast"));
  }

  function filterBurger(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "Lunch"));
  }

  function filterSoup(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "Sweet"));
  }

  function filterTea(event){
    event.preventDefault();
    setCurMenu(menuItems.filter((product) => product.category === "Drink"));
  }


  return (
    <div className="App">
      <MyNavbar />
      <Slide />
      <Category reset={reset} pizza={filterPizza} burger={filterBurger} soup={filterSoup} tea={filterTea}  />
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
