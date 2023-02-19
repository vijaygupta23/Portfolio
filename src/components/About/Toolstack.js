import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiFigma,
SiBitbucket
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vscode" width="60" height="60"/>
        </a>    
      </Col>      
    </Row>
  );
}

export default Toolstack;
