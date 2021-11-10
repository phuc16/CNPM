import React, { useState } from 'react';
import { Cell, Title, Row, Container } from './DataTableElement';
import PopUp from './PopUp.js';

function OneRow(props){
  const {id_order, table_num, payment, total, order_date} = props.rowInfo;
  const [PopUpState, setPopUpState] = useState(false);
  function handleClick(){
    setPopUpState(true);
  }
  return(
    <>
    <Row onClick = {handleClick}>
      <Cell>{id_order}</Cell>
      <Cell>{table_num}</Cell>
      <Cell>{payment}</Cell>
      <Cell>{total}</Cell>
      <Cell>{order_date}</Cell>
    </Row>
      <PopUp trigger={PopUpState} setTrigger={setPopUpState} id={id_order} />  
    </>

  );
}

function TitleRow(){
  return (
    <Row>
      <Title>ORDER ID</Title>
      <Title>Table</Title>
      <Title>Payment</Title>
      <Title>Total (USD)</Title>
      <Title>Date</Title>
    </Row>
  );
}

export default function DataTable(props) {
    return (    
      <Container> 
      <TitleRow />
      {props.data.map((item) => {
        return <OneRow
        key = {item.id_order}
        rowInfo = {item}
        />
      })}
      </Container>
    );
  }