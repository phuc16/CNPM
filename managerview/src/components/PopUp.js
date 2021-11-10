import React from 'react'
import { Window, Content, ClosedBtn, Container, Cell, QuantityCell, TitleCell} from './PopUpElement';
import { DetailData } from '../data/detail_data';

function PopUp(props) {

    return props.trigger ? (
        <Window>
            <Content>
                <ClosedBtn onClick={() => props.setTrigger(false)}>Close</ClosedBtn>
                <h3>Thông tin chi tiết</h3>
                <Container>
                        <TitleCell> Product </TitleCell>
                        <TitleCell> Quantity </TitleCell>
                        <TitleCell> Total </TitleCell>

                {DetailData[props.id - 1].order.map((item) => {
                return (
                    <>
                    <Cell>{item.title}</Cell>
                    <QuantityCell>{item.quantity}</QuantityCell>
                    <Cell>{item.total}</Cell>
                    </>
            );
          })}
                </Container>
            </Content>       
        </Window>
    ) : "";
}

export default PopUp
