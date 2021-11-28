import Carousel from 'react-bootstrap/Carousel';
import "./slide.css"

const Slide = () => {
    return (  
        <div className="cara">    
            <div style={{ marginBottom: "30px" }}>  </div>  
            <div className="container my__carousel_main" >  
                <Carousel fade indicators={false}>  
                    <Carousel.Item style={{'height':"300px"}} >  
                        <img style={{'height':"300px", 'border-radius': "20px"}}  className="d-block w-100"  src={'img/carousel/sale.jpeg'} alt=''/>    
                    </Carousel.Item>  
                    <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px",  'border-radius': "20px"}}  className="d-block w-100"  src={'img/carousel/sale2.jpg'} alt=''/>  
                    </Carousel.Item>  
                    <Carousel.Item style={{'height':"300px"}}>  
                        <img style={{'height':"300px",  'border-radius': "20px"}}  className="d-block w-100"  src={'img/carousel/sale3.jpg_large'} alt=''/>  
                    </Carousel.Item> 
                </Carousel>  
            </div>  
        </div>  
    )  
}

export default Slide;