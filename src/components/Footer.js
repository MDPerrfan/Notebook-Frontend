import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineGoogle,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  
  const textColor = props.mode === 'dark' ? 'white' : 'rgb(65, 65, 65)';

  return (
    <Container fluid className="footer" style={{ background: props.mode === 'dark' ? 'rgb(43, 48, 53)' : 'rgb(246, 246, 250)', color: textColor }}>
      <Row>
{        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by <span className="coral">Parves</span></h3>
        </Col>}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MDPerrfan"
                style={{ color: textColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/mdparves.erfan.3/"
                style={{ color: textColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohammed-parves-6635212aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ color: textColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto: mdperrfan@gmail.com"
                style={{ color: textColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;