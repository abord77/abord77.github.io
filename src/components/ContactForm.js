import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/cartoon-writer.png";
import TrackVisibility from "react-on-screen";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import "animate.css";

// How to get the emailjs submission part working
// https://stackoverflow.com/questions/72632995/adding-emailjs-recaptcha-verification-in-react
// https://stackoverflow.com/questions/74316588/vuejs-submit-form-with-emailjs-error-the-3rd-parameter-is-expected-to-be-the

export const ContactForm = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(formInitialDetails);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const [processing, setProcessing] = useState(false);
  const refCaptcha = useRef();
  const form = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onFormUpdate = (category, value) => {
    setFormValues({
      ...formValues,
      [category]: value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // clear old messages on new submission attempt
    setErrorMessage("");
    setSuccessMessage("");

    if (honeypot && honeypot.trim() !== "") {
      // console.log("Honeypot triggered. Simulating fake successful submission.");
      setProcessing(true);
      setTimeout(() => {
        setSuccessMessage("Message sent successfully!");
        setFormValues(formInitialDetails);
        setHoneypot("");
        setCaptchaToken(null);
        setProcessing(false);
        if (refCaptcha.current) {
          refCaptcha.current.reset();
        }
      }, 500);
      return;
    }

    if (!captchaToken) {
      setErrorMessage("Please verify that you are not a robot.");
      return;
    }

    const token = refCaptcha.current.getValue();

    const params = {
      ...formValues,
      "g-recaptcha-response": token,
    };

    // Lock form fields and update button text by setting processing state to true
    setProcessing(true);

    emailjs
      .send(
        "service_jsijx5x",
        "template_guxiepz",
        params,
        "iCnuLvAjqZPwXZqU4",
        "g-recaptcha-response"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccessMessage("Message sent successfully!");
          setFormValues(formInitialDetails);
          setCaptchaToken(null);
          setProcessing(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage("Failed to send message, please try again.");
          // Reset the reCAPTCHA widget if there was an error
          if (refCaptcha.current) {
            refCaptcha.current.reset();
          }
          setCaptchaToken(null);
          setProcessing(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Send a message!</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formValues.name}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                          disabled={processing}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formValues.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          disabled={processing}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <div>
                          <textarea
                            rows="5"
                            value={formValues.message}
                            placeholder="Message"
                            onChange={(e) =>
                              onFormUpdate("message", e.target.value)
                            }
                            disabled={processing}
                            required
                          ></textarea>
                        </div>

                        {errorMessage && <p class="danger">{errorMessage}</p>}

                        <input
                          type="text"
                          name="honeypot"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          style={{ display: "none" }}
                          autoComplete="off"
                        />

                        <input
                          type="hidden"
                          name="g-recaptcha-response"
                          value={captchaToken || ""}
                        />

                        <div>
                          <ReCAPTCHA
                            sitekey={"6Lfkq90qAAAAAGDjU1PBp2pGG9CqIwbZUUh_ZxT3"}
                            ref={refCaptcha}
                            onChange={handleCaptchaChange}
                          />
                        </div>
                        <div>
                          <button type="submit" disabled={processing}>
                            <span>
                              {processing ? "Sending..." : "Send Message"}
                            </span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                    {successMessage && <p class="success">{successMessage}</p>}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
