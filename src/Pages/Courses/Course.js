import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const courseData = useLoaderData();
  console.log(courseData);

  return (
    <Container>
      <Row>
        <Col lg="6">
          <Card className="m-5 p-3">
            <img
              className="mx-auto"
              style={{ width: "150px" }}
              src={courseData[0].image_url}
              alt=""
            />
            <h5 className="text-center m-2">{courseData[0].course_name}</h5>
            <p className="p-3">{courseData[0].details}</p>
            <Button className="bg-primary">
              <Link
                className="text-decoration-none text-light"
                to={`/checkout/${courseData[0]._id}`}
              >
                Go Premium Access
              </Link>
            </Button>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="m-5 p-3">
            <img
              className="mx-auto"
              style={{ width: "150px" }}
              src={courseData[1].image_url}
              alt=""
            />
            <h5 className="text-center m-2">{courseData[1].course_name}</h5>
            <p className="p-3">{courseData[1].details}</p>
            <Button className="bg-primary">
              <Link
                className="text-decoration-none text-light"
                to={`/checkout/${courseData[1]._id}`}
              >
                Go Premium Access
              </Link>
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
