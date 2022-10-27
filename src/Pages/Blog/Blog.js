import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="m-4">
      <Row>
        <Col className="" lg="6">
          <Card style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title> Q1.What is CORS?</Card.Title>

              <Card.Text>
                CORS meaning Cross Origin Rsource Sharing CORS allows API to
                indicate any origin other than its own from which the client can
                request resources.At the point when a program executes a content
                that references an asset on another space, it demands the
                substance straightforwardly from the subsequent space. The
                subsequent space decides if to serve the substance by approving
                the main area, which is incorporated as a component of the
                solicitation. The subsequent space then gets either the
                substance or a blunder message once again to the program,
                bypassing the main area altogether.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="" lg="6">
          <Card style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title>
                Q2. Why are you using firebase? What other options do you have
                to implement authentication?
              </Card.Title>

              <Card.Text>
                Most applications have some type of verification include that is
                important to distinguish the client. By using , it is not
                difficult to utilize SDK, instant UI libraries, and backend
                administrations, it is feasible to set up the entire
                verification process in only two or three minutes. Firebase
                permits clients to verify with their telephone number, email,
                Google, and Facebook. There are many other options for
                authentication like Okta, Authress, Frontegg etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="" lg="6">
          <Card style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title>Q3. How does the PrivateRoute Work?</Card.Title>

              <Card.Text>
                React router is a importanr function of react.Privateroute is
                protected from accessing without authentication PrivateRoute
                part is the outline for all confidential courses in the
                application. Assuming that the client is signed in, continue and
                show the part being referred to; in any case, divert the client
                to sign-in page. Also, we can characterize the rationale of
                isLogin utility capability independently in utils organizer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="" lg="6">
          <Card style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title> Q4. What is Node? What does Node work?</Card.Title>

              <Card.Text>
                Node. js is an open-source,JavaScript runtime environment and
                library for running web applications outside the client's
                browser.Whenever a client demands something from the client side
                of the application what happens is , the solicitation is first
                shipped off the server and afterward in that server some
                handling or computations happens for the approval of the client
                side solicitation and in the wake of doing all such approval a
                reaction is shipped off the client side. Fundamentally for doing
                every single such estimation and handling , this NodeJs system
                of JavaScript is utilized.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
