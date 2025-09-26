import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { experiences } from "./ExperienceData.tsx";

export const Experiences = () => {
  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Past Work Experience</h2>
                  <Tab.Container defaultActiveKey={experiences[0].eventKey}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" style={{ flexWrap: "nowrap" }}>
                      {experiences.map(({ eventKey, company }) => (
                        <Nav.Item key={eventKey}>
                          <Nav.Link eventKey={eventKey}>{company}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {experiences.map(({ eventKey, title, company, dateRange, descriptionItems }) => (
                        <Tab.Pane eventKey={eventKey} key={eventKey}>
                          <div className="center">
                            <h3>{title}</h3>
                            <h5>{company} | {dateRange}</h5>
                          </div>
                          <ul>
                            {descriptionItems.map((desc, idx) => (
                              <li key={idx}>{desc}</li>
                            ))}
                          </ul>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
