import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experiences = () => {
  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Past Work Experience</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Core Avionics</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Plooto</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">TD Bank</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="center">
                          <h3>Software Tools Developer</h3>
                          <h5>CoreAVI | September 2024 - December 2024</h5>
                          <p></p>
                        </div>
                        <ul>
                          <li>
                            Spearheaded Python project leveraging Tkinter and
                            Pandas to automate PM slides generation by updating
                            data from various software, reducing manual updates
                            by 90% and saving 10+ hours/week for stakeholders
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Enhanced internal tools by implementing mission
                            critical features using NodeJS, TailwindCSS and
                            React to achieve a 15% efficiency increase across
                            teams and improving user experiences
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Collaborated with DevOps to migrate 20+ virtual
                            machines to a Docker-based environment to be used
                            with Kubernetes for a more efficient CI/CD flow
                            reducing maintenance effort by 30%
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Led Agile Project Management efforts by designing
                            and maintaining Jira boards for various projects
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="center">
                          <h3>QA Test Engineer</h3>
                          <h5>Plooto | January 2024 - April 2024</h5>
                          <p></p>
                        </div>
                        <ul>
                          <li>
                            Wrote automated E2E UI and regression tests,
                            improving coverage by 15% with Playwright and
                            TypeScript
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Optimized test runtime and reduced tech debt in
                            tests by 20% through Playwright's fixture pattern
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Used Azure Devops for orchestrating builds to
                            validate defect fixes outlined in ClickUp and worked
                            with PMs/devs to fix gaps in requirements for QA
                            efforts
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="center">
                          <h3>DevOps Engineer</h3>
                          <h5>TD Bank | October 2022 - December 2022</h5>
                          <p></p>
                        </div>
                        <ul>
                          <li>
                            Created CD.yml files to do SpringBoot infrastructure
                            builds and application deployments via Jenkins
                            pipeline in private VMware cloud during in-house
                            certification
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Generated detailed build documents in Confluence for
                            LOB projects, resulting in a 50% productivity
                            increase
                          </li>
                        </ul>
                      </Tab.Pane>
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
