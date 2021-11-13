import React, { useState } from 'react';
import { Cell, Title, Row, Container } from './DataTableElement';
import PopUp from './PopUp.js';
import Axios from "axios";

function OneRow(props){
  const {OrderID, TableNo, PaymentType, TotalCost, PaymentDate} = props.rowInfo;
  const [PopUpState, setPopUpState] = useState(false);
  const [detailData, setDetailData] = useState([]);

  function handleClick(){
    Axios.get('http://localhost:3001/api/details', {
      params: {
        OrderID: OrderID}
      }).then((response) => {
      setDetailData(response.data);
    }).then(() => setPopUpState(true));
  }
  return(
    <>
    <Row onClick = {handleClick}>
      <Cell>{OrderID}</Cell>
      <Cell>{TableNo}</Cell>
      <Cell>{PaymentType}</Cell>
      <Cell>{TotalCost}</Cell>
      <Cell>{PaymentDate}</Cell>
    </Row>
      <PopUp trigger={PopUpState} setTrigger={setPopUpState} detail_data={detailData} />  
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