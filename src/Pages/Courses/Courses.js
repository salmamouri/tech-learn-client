import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../Category/Category";
import Topic from "../Category/Topic";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <Category></Category>
        </Col>
        <Col lg="9">
          <Topic></Topic>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
