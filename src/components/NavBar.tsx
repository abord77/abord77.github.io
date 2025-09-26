import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import navIcon0 from "../assets/img/logo.png";
import resumeIcon from "../assets/img/resume-icon.png";
import linkedinIcon from "../assets/img/linkedin-icon.jpg";
import githubIcon from "../assets/img/github-icon.png";
import resumePdf from "../assets/Raymond_Resume_2025.pdf";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={navIcon0} alt="" style={{ width: "150%" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home"
                    ? scrolled
                      ? "active navbar-link"
                      : "active navbar scrolled-link"
                    : scrolled
                    ? "navbar-link"
                    : "navbar scrolled-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className={
                  activeLink === "experiences"
                    ? scrolled
                      ? "active navbar-link"
                      : "active navbar scrolled-link"
                    : scrolled
                    ? "navbar-link"
                    : "navbar scrolled-link"
                }
                onClick={() => onUpdateActiveLink("experiences")}
              >
                Experiences
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "Projects"
                    ? scrolled
                      ? "active navbar-link"
                      : "active navbar scrolled-link"
                    : scrolled
                    ? "navbar-link"
                    : "navbar scrolled-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href={resumePdf}
                  className={scrolled ? "scrolled" : "not-scrolled"}
                >
                  <img src={resumeIcon} alt="" />
                </a>
                <a
                  href="https://linkedin.com/in/r77li"
                  className={scrolled ? "scrolled" : "not-scrolled"}
                >
                  <img src={linkedinIcon} alt="" />
                </a>
                <a
                  href="https://github.com/abord77"
                  className={scrolled ? "scrolled" : "not-scrolled"}
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
              <HashLink to="#contact">
                <button className={scrolled ? "scrolled" : "not-scrolled"}>
                  <span>Contact</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
