import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topic = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);
  return (
    <div>
      <h4>{topics.length}</h4>
      <Row>
        {topics.map((topic) => (
          <Col lg={6}>
            <Card className="m-2" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                className="mx-auto"
                style={{ width: "150px" }}
                src={topic.img}
              />
              <Card.Body className="text-center">
                <Card.Title>{topic.name}</Card.Title>
                <Card.Text>{topic.details}</Card.Text>
                <Button variant="primary">Show more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Topic;
