import "./Category.css"

export default function Category (props) {
  return (
    <div>
      <div align="center">
          <button type="button" class="bt " onClick={props.reset}>
            {" "}
            ALL
          </button>
          <button type="button" class="bt margin-left" onClick={props.pizza}>
            <img style={{ height: "20px" }} src={"img/pizza.png"} alt=''/> PIZZA
          </button>
          <button type="button" class="bt margin-left" onClick={props.burger}>
            <img style={{ height: "25px" }} src={"img/hambuger.png"} alt=''/> BURGER
          </button>

          <button type="button" class="bt margin-left" onClick={props.soup}>
            <img style={{ height: "30px" }} src={"img/soup.jpg"} alt=''/> SOUP
          </button>
          <button type="button" class="bt margin-left" onClick={props.tea}>
            <img style={{ height: "25px" }} src={"img/drink.png"} alt=''/> DRINK
          </button>
          <button type="button" class="bt margin-left" onClick={props.other}>
            <img style={{ height: "25px" }} src={"img/other.png"} alt=''/> OTHER
          </button>
      </div>
    </div>
  );
};

