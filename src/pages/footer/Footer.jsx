import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { Container, Row, Col } from "reactstrap";
import "./../../App.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer">
        <Row>
          <Col md="6" className="text-center text-md-left mb-2 mb-md-0">
            <a href="#">
              <FaFacebook size={30} className="mr-2" />
            </a>
            <a href="#">
              <FaInstagram size={30} className="mr-2" />
            </a>
            <a href="#">
              <BsInfoCircle size={30} />
            </a>
          </Col>
          <Col md="6" className="text-center text-md-right">
            <small>© 2023 BrickBin. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
