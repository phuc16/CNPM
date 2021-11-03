import { Nav, Navbar, NavDropdown, Col, button} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./slide.css"

const Slide = () => {

    return (  
        <div>    
            <div  style={{ marginBottom: "30px" }} >  </div>  
            <div className='container' >  
                <Carousel>  
                    <Carousel.Item style={{'height':"300px"}} >  
                        <img style={{'height':"300px", 'border-radius': "20px"}}  className="d-block w-100"  src={'img/sale.jpeg'} />    
                    </Carousel.Item  >  
                                 
                    <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px", 'border-radius': "20px"}}  className="d-block w-100"  src={'img/pizza4.jpg'} />  
                    </Carousel.Item>  
                </Carousel>  
            </div>  
        </div>  
                )  
}

export default Slide;