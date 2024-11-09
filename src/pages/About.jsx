import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/About.css";

const About = () => {
  return (
    <div>
      {/* Main About Section */}
      <Container className="my-5">
        <h2>About the Project</h2>
        <p>
          The Astana Census 2024 is an initiative by EcoHigh Solutions LLP in
          collaboration with the National Statistics Bureau of Kazakhstan. Our
          mission is to gather comprehensive data to guide urban planning and
          future developments in Astana.
        </p>
        <h3>Project Goals</h3>
        <ul>
          <li>Accurate population data collection</li>
          <li>Community engagement and participation</li>
          <li>Data security and privacy adherence</li>
        </ul>
      </Container>

      {/* Two-Block Layout Section */}
      <section className="block-layout">
        <Container fluid className="p-0">
          <Row className="m-0">
            {/* Left Block */}
            <Col
              md={6}
              className="block-left d-flex align-items-center justify-content-center"
            >
              <div className="text-content">
                <h3>Data Drives Astana’s Future</h3>
                <p>
                  The census data we collect will empower local policymakers,
                  businesses, researchers, and community members to make
                  informed, data-driven decisions. Reliable population data
                  helps build a better future for Astana.
                </p>
              </div>
            </Col>

            {/* Right Block */}
            <Col
              md={6}
              className="block-right d-flex align-items-center justify-content-center"
            >
              <div className="overlay-text">
                <h4>Astana Census 2024</h4>
                <h2>Shaping a Sustainable Future</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
