import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const AdminNav = () => {
  return  <header className= "admin__header">
    <div className="admin__nav-top">
      <Container>
        <Row>
          <Col>
            <div className="admin__nav-top__logo">
              <a href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
              </Row>
              </Container>
    </div>

  </header>
}

export default AdminNav