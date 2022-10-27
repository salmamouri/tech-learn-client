import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topic = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://tech-learn-server-ruddy.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Row className="mt-4">
        {categories.map((category) => (
          <Col lg={6}>
            <Card className="m-2" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                className="mx-auto"
                style={{ width: "150px" }}
                src={category.img}
              />
              <Card.Body className="text-center">
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.details}</Card.Text>

                <Link to={`/category/${category.id}`}>
                  <Button>Show more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Topic;
