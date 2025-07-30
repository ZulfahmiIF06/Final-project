import EvenComponent from "../components/EvenComponent";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { EventPage } from "../data/index";

const Event = () => {
  return (
    <div className="event-page">
      <div className="event min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">EVENT-EVENT TERBARU</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {EventPage.map((event) => {
                return (
                  <Card
                    key={event.id}
                    className="text-center event-kartu w-100 mb-5 "
                  >
                    <Card.Header>EVENT TERBARU</Card.Header>
                    <Card.Body>
                      <img src={event.image} alt="Event.com" />
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>{event.paragraf}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <EvenComponent />
    </div>
  );
};

export default Event;
