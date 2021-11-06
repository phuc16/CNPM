import { Nav, Navbar, NavDropdown, Col } from "react-bootstrap";
import "./category.css";
import { Link } from "react-router-dom";

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
            <img style={{ height: "20px" }} src={"img/pizza.png"} /> PIZZA
          </button>
        </Link>
        <Link to="/bugger">
          <button type="button" class="bt margin-left">
            <img style={{ height: "25px" }} src={"img/hambuger.png"} /> BUGGER
          </button>
        </Link>
        <Link to="/soup">
          <button type="button" class="bt margin-left">
            <img style={{ height: "30px" }} src={"img/soup.jpg"} /> SOUP
          </button>
        </Link>
        <Link to="/drink">
          <button type="button" class="bt margin-left">
            <img style={{ height: "25px" }} src={"img/drink.png"} /> DRINK
          </button>
        </Link>
        <Link to="/other">
          <button type="button" class="bt margin-left">
            <img style={{ height: "25px" }} src={"img/other.png"} /> OTHER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
