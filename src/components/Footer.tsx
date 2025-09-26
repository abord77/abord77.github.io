import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>&copy; Raymond Li</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
