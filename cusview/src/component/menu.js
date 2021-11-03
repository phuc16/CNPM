import React, { Component ,useState} from 'react';
import { Card } from 'react-bootstrap';
import "./menu.css"
const Menu = () => {


const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (

    <div  class="card-group">
        <Card style={{ 'margin': "20px 20px 20px 120px" }}>
            <img class="card-img-top" src={'img/pizza1.jpeg'} style={{ 'border-radius': "10px" }}></img>
            <Card.Body>
                <Card.Title>PIZZA 1</Card.Title>
                <Card.Text>$4.8</Card.Text>
                <button
                  type="button"
                  class="ct"
                  data-bs-toggle="modal"
                  data-bs-target="#notAchieved"
                >
                  View
                </button>

                <div
                  class="modal fade"
                  id="notAchieved"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="notAchieved">
                          Số môn không đạt
                        </h5>
                      </div>
                    <div class="modal-body"></div>
                    </div>    
                </div>
                </div>
            </Card.Body>
        </Card>
        <Card style={{ 'margin': "20px 20px 20px 0px" }}>
            <img class="card-img-top" src={'img/pizza2.webp'} style={{ 'border-radius': "10px" }}></img>
            <Card.Body>
                <Card.Title>PIZZA 2</Card.Title>
                <Card.Text>$4.8</Card.Text>
                <button type="button" class="ct">Add Cart</button>
            </Card.Body>
        </Card>
        <Card style={{ 'margin': "20px 20px 20px 0px" }}>
            <img class="card-img-top" src={'img/pizza2.webp'} style={{ 'border-radius': "10px" }}></img>
            <Card.Body>
                <Card.Title>PIZZA 2</Card.Title>
                <Card.Text>$4.8</Card.Text>
                <button type="button" class="ct">Add Cart</button>
            </Card.Body>
        </Card>
        <Card style={{ 'margin': "20px 20px 20px 0px" }}>
            <img class="card-img-top" src={'img/pizza3.png'} style={{ 'border-radius': "10px" }}></img>
            <Card.Body>
                <Card.Title>PIZZA 3</Card.Title>
                <Card.Text>$4.8</Card.Text>
                <button type="button" class="ct">Add Cart</button>
            </Card.Body>
        </Card>
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <Card style={{ 'margin': "20px 120px 20px 0px" }}>
            <img class="card-img-top" src={'img/pizza4.jpg'} style={{ 'border-radius': "10px" }}></img>
            <Card.Body>
                <Card.Title>PIZZA 4</Card.Title>
                <Card.Text>$4.8</Card.Text>
                <button type="button" class="ct">Add Cart</button>
            </Card.Body>
        </Card>
        <div class="w-100 d-none d-md-block d-lg-none"></div>
    </div>

    );
}


export default Menu;