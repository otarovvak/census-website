import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import "../assets/FAQ.css"; // Link to custom CSS styles

const FAQ = () => {
  return (
    <Container fluid className="faq-page my-5 py-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center mb-5">
            Here are the most commonly asked questions about the Astana Census
            2024. If you have any other questions, feel free to contact us.
          </p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the Astana Census 2024?
              </Accordion.Header>
              <Accordion.Body>
                The Astana Census 2024 is a city-wide data collection initiative
                aimed at accurately counting the population of Astana. It
                provides demographic insights that will be used for future
                planning, resource allocation, and sustainable urban
                development.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Why is it important for me to participate in the census?
              </Accordion.Header>
              <Accordion.Body>
                Participation in the census is crucial because it helps us
                gather accurate information on the population and demographics
                of Astana. This data will guide important decisions for urban
                planning, public services, infrastructure investments, and
                ensure that resources are allocated where needed.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How will the data be collected?
              </Accordion.Header>
              <Accordion.Body>
                Data will be collected through both offline and online
                interviews. Trained interviewers equipped with tablets will
                visit households to gather information directly. For those who
                prefer, online forms can also be filled out via our secure
                census platform.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How is my personal information protected?
              </Accordion.Header>
              <Accordion.Body>
                Protecting your personal information is our top priority. All
                data collected will be encrypted and stored securely. Only
                authorized personnel have access to the data, and it will be
                used solely for research and planning purposes as mandated by
                the law.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                When will the census results be available?
              </Accordion.Header>
              <Accordion.Body>
                The final census report will be available by October 2024,
                following data analysis and verification. We will share a
                summary of the findings with the public to ensure transparency
                and awareness.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                What if I am not available when the interviewer comes?
              </Accordion.Header>
              <Accordion.Body>
                If you are unavailable during the interviewer’s visit, you can
                either reschedule by contacting us or complete the census online
                using our secure web form. Your participation is very important,
                so we encourage you to use whichever method works best for you.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Will I receive any benefits from participating?
              </Accordion.Header>
              <Accordion.Body>
                By participating in the Astana Census 2024, you are directly
                contributing to the future development of our city. Your data
                will help ensure better public services, improved
                infrastructure, and an overall improved quality of life for all
                residents. Additionally, we offer a small token of appreciation
                to participants who complete the process.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
