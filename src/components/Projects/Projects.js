import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resource from "../../Assets/Projects/Chat.png";
import weather from "../../Assets/Projects/weather.png";
import codeeasy from "../../Assets/Projects/login.png";
import task from "../../Assets/Projects/Payment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resource}
              isBlog={false}
              title="Real-Time-Chat-Application"
              description="Build a project Real-Time-Chat-Application where user can chat in a group or any individual. When user enter display name and room number then he will be enter in a particular room, where he can send message to other participant. The tech used to build this application is Node.js, Socket.io, HTML and CSS."
              ghLink="https://github.com/vijaygupta23/Chat-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title=" Payment Gateway"
              description="Build a Payment Gateway web application. This is fund collection for the education of poor or orphan children. There will be a simple donate button on the homepage. On clicking the donate button,
              the user will land on the payment page where the user can select the amount to be paid. The tech used to build this website is HTML, CSS, JavaScript and  Razorpay test mode"
              ghLink="https://github.com/vijaygupta23/Payment_Gateway"
              demoLink="https://vijaygupta23.github.io/Payment_Gateway-Spark-Foundation/"
            />
  </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="TaskManager-API"
              description="Build a REST-API using node.js to store users tasks.Implemented Authentication for signup/login for user using jwt-tokens.User will be notified via an email whenever he signup or delete profile."
              ghLink="https://github.com/Chaudhary456/Task-manager-api"
              demoLink=""
            />
  </Col>*/}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Build a web-application that provide the weather update of a particular location.
              Used Mapbox API to get the geocoordinates of requested location.
              Used weather API to fetch the weather report of requested geocoordinates."
              ghLink="https://github.com/vijaygupta23/vijaygupta.weather.app"
              demoLink="https://vijaygupta23.github.io/vijaygupta.weather.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeeasy}
              isBlog={false}
              title="Login Page"
              description="Build a Login page using HTML and CSS.
               User can login by email,Facebook and Google"
              ghLink="https://github.com/vijaygupta23/Login-Page"
              demoLink="https://vijaygupta23.github.io/Login-Page/"
            />
          </Col>
            
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
