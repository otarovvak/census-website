import React from "react";
import { Container, Accordion, Card, Row, Col } from "react-bootstrap";
import { FaGlobe, FaLeaf, FaPeopleArrows } from "react-icons/fa";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Mission and Vision Section */}
      <section className="mission-vision py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Our Mission and Vision</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <FaGlobe size={60} className="text-primary mb-3" />
              <h4>Global Perspective</h4>
              <p>
                Bringing international best practices to Astana to ensure
                sustainable growth and a better quality of life for all.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <FaLeaf size={60} className="text-success mb-3" />
              <h4>Green Solutions</h4>
              <p>
                Transforming Astana into a leading example of sustainable living
                through green initiatives and eco-friendly projects.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <FaPeopleArrows size={60} className="text-info mb-3" />
              <h4>Community Engagement</h4>
              <p>
                Fostering strong community ties by ensuring all citizens have a
                voice in shaping Astana's future.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <Container>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the Astana Census 2024?
              </Accordion.Header>
              <Accordion.Body>
                The Astana Census 2024 is a city-wide initiative aimed at
                accurately counting the population of Astana, as well as
                gathering demographic data to assist with future city planning.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How will the data be collected?
              </Accordion.Header>
              <Accordion.Body>
                Data will be collected by trained interviewers through
                face-to-face interviews using digital tablets. This ensures
                real-time data entry and minimizes the possibility of errors.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Why is the census important?</Accordion.Header>
              <Accordion.Body>
                The census provides essential data for understanding the
                population structure, planning public services, and allocating
                resources effectively for the development of the city.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I participate?</Accordion.Header>
              <Accordion.Body>
                You can participate by providing accurate information when
                approached by one of our interviewers. Your participation helps
                us shape a better future for Astana!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </div>
  );
};

export default Home;
