import React from 'react'
import { Window, Content, ClosedBtn, Container, Cell, QuantityCell, TitleCell} from './PopUpElement';


function PopUp(props) {
    return props.trigger ? (
        <Window>
            <Content>
                <ClosedBtn onClick={() => props.setTrigger(false)}>Close</ClosedBtn>
                <h3>Order Details</h3>
                <Container>
                        <TitleCell> Product </TitleCell>
                        <TitleCell> Quantity </TitleCell>
                        <TitleCell> Total </TitleCell>
                        {props.detail_data.map((item) => {
                            return <>
                                 <Cell>{item.Name}</Cell>
                                 <QuantityCell>{item.Quantity}</QuantityCell>
                                 <Cell>{item.Cost}</Cell>
                            </>
                        })}
                </Container>
            </Content>       
        </Window>
    ) : "";
}

export default PopUp
