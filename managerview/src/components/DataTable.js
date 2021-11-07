import React, { useState } from 'react';
import { Cell, Title, Row, Container } from './DataTableElement';
import PopUp from './PopUp.js';

function OneRow(props){
  const {id, table, payment, total, date} = props.rowInfo;
  const [PopUpState, setPopUpState] = useState(false);
  function handleClick(){
    setPopUpState(true);
  }
  return(
    <>
    <Row onClick = {handleClick}>
      <Cell>{id}</Cell>
      <Cell>{table}</Cell>
      <Cell>{payment}</Cell>
      <Cell>{total}</Cell>
      <Cell>{date}</Cell>
    </Row>
      <PopUp trigger={PopUpState} setTrigger={setPopUpState} id={id} />  
    </>

  );
}

function TitleRow(){
  return (
    <Row>
      <Title>ID</Title>
      <Title>Table</Title>
      <Title>Payment</Title>
      <Title>Total</Title>
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
        key = {item.id}
        rowInfo = {item}
        />
      })}
      </Container>
    );
  }