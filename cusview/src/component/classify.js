import "./classify.css"

const Classify = () => {

    return (
        <div >
            <div align="center">
                <button type="button" class="bt "><img style={{'height':"20px" }} src={'img/pizza.png'} alt=''/> PIZZA</button>
                <button type="button" class="bt margin-left"><img style={{'height':"25px"}}  src={'img/hambuger.png'} alt=''/> BUGGER</button>
                <button type="button" class="bt margin-left"><img style={{'height':"30px"}}  src={'img/soup.jpg'} alt=''/> SOUP</button>
                <button type="button" class="bt margin-left"><img style={{'height':"25px"}}  src={'img/drink.png'} alt=''/> DRINK</button>
                <button type="button" class="bt margin-left"><img style={{'height':"25px"}}  src={'img/other.png'} alt=''/> OTHER</button>

            </div>
        </div>
    );
}

export default Classify;