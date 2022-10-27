import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div>
      <Card
        className="m-5
      p-5 w-50  mx-auto"
      >
        <h5 className="text-center">{courseData.course_name}</h5>
        <p></p>
        <Button className="w-50 mx-auto">Buy now</Button>
      </Card>
    </div>
  );
};

export default CheckOut;
