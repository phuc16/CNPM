import "./Category.css"
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div>
      <div align="center">
        <Link to="/">
          <button type="button" class="bt ">
            {" "}
            ALL
          </button>
        </Link>
        <Link to="/pizza">
          <button type="button" class="bt margin-left">
            <img style={{ height: "20px" }} src={"img/pizza.png"} alt=''/> PIZZA
          </button>
        </Link>
        <Link to="/bugger">
          <button type="button" class="bt margin-left">
            <img style={{ height: "25px" }} src={"img/hambuger.png"} alt=''/> BUGGER
          </button>
        </Link>
        <Link to="/soup">
          <button type="button" class="bt margin-left">
            <img style={{ height: "30px" }} src={"img/soup.jpg"} alt=''/> SOUP
          </button>
        </Link>
        <Link to="/drink">
          <button type="button" class="bt margin-left">
            <img style={{ height: "25px" }} src={"img/drink.png"} alt=''/> DRINK
          </button>
        </Link>
        <Link to="/other">
          <button type="button" class="bt margin-left">
            <img style={{ height: "25px" }} src={"img/other.png"} alt=''/> OTHER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
