import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
function HomeScreen() {
  return (
    <div>
          <h1>Latest Products</h1>
          <Row>
              {products.map(product =>
                  <Col>
                    <h3></h3>
                  </Col>)}
          </Row>
    </div>
  );
}

export default HomeScreen;
