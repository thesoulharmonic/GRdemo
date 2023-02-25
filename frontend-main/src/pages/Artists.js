import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Artists() {
  return (
    <div>
      
      <div className="homeArtist">

          <Row>
          <h2>Artists</h2>
          <LinkContainer to="/artists/Matthewhalsall">
            <Col className="home-artist">
              <img src="../images/MHartist.jpeg" />
              <p>Matthew Halsall</p>
            </Col>
          </LinkContainer>
          <LinkContainer to="/artists/Haniarani">
            <Col className="home-artist">
              <img src="../images/HRartist.jpeg" />
              <p>Hania Rani</p>
            </Col>
          </LinkContainer>

          <LinkContainer to="/artists/Mammalhands">
            <Col className="home-artist">
              <img src="../images/MammalHartist.jpeg" />
              <p>Mammal Hands</p>
            </Col>
          </LinkContainer>
        </Row>

        <Row>
          <LinkContainer to="/artists/Hanakiv">
            <Col className="home-artist">
              <img src="../images/HKartist.jpeg" />
              <p>Hanakiv</p>
            </Col>
          </LinkContainer>

          <LinkContainer to="/artists/Caoilfhionnrose">
            <Col className="home-artist">
              <img src="../images/CRartist.jpeg" />
              <p>Caoilfhionn Rose</p>
            </Col>
          </LinkContainer>

          <LinkContainer to="/artists/Jasminemyra">
            <Col className="home-artist">
              <img src="../images/JMartist.jpeg" />
              <p>Jasmine Myra</p>
            </Col>
          </LinkContainer>
        </Row>



      </div>
    </div>
  )
}

export default Artists
