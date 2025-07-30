import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Keunggulan } from "../data";

const Event = () => {
  return (
    <div>
      {/*Keunggulan*/}
      <div className="keunggulan">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center fw-bold">KEUNGGULAN</h2>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
            {Keunggulan.map((data) => {
              return (
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>{data.desc}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* AkhirKeunggulan*/}
    </div>
  );
};

export default Event;
