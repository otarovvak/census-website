import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/Hero.css";

const Hero = () => {
  return (
    <div className="hero-bg text-center p-5">
      <Container>
        <h1>Welcome to the Astana Census 2024 Project</h1>

        <Button as={Link} to="/about" variant="primary">
          Learn More
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
