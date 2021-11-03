import { Nav, Navbar, NavDropdown, Col } from "react-bootstrap";
import "./classify.css"

const Classify = () => {

    return (
        <div >
            <div align="center">
                <button type="button" class="bt "><img style={{'height':"20px" }} src={'img/pizza.png'} /> PIZZA</button>
                <button type="button" class="bt margin-left"><img style={{'height':"25px"}}  src={'img/hambuger.png'} /> BUGGER</button>
                <button type="button" class="bt margin-left"><img style={{'height':"30px"}}  src={'img/soup.jpg'} /> SOUP</button>
                <button type="button" class="bt margin-left"><img style={{'height':"25px"}}  src={'img/drink.png'} /> DRINK</button>
                <button type="button" class="bt margin-left"><img style={{'height':"25px"}}  src={'img/other.png'} /> OTHER</button>

            </div>
        </div>
    );
}

export default Classify;