import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Item from "./components/item/Item";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <div className="container-fluid">DashBoard</div>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Item />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
