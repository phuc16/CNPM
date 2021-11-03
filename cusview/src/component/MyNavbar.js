import { Nav, Navbar, NavDropdown, Col } from "react-bootstrap";
import "./NavBar.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
const MyNavbar = () => {

    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <h1>TODAY MENU</h1>
                </div>

                <div className="header-right">
                    <div><AiOutlineShoppingCart size={30} style={{marginRight: "5px"}}/></div>
                    <div><RiBillLine size={30} style={{marginRight: "5px"}}/></div>
                </div>
            </div>
        </div>
    );
}

export default MyNavbar;