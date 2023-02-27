import axios from "../axios";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import CarouselMain from "../components/Carousel";

function Home() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);

      // uses axios to fetch data form mongoose via API

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
    {/* impport bootstrap carousel */}
      <CarouselMain />
      <div className="featured-products-container container mt-4">
        <h2>Store</h2>
        {/* latest products here via map */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link to="/category/all">
            <Button className="gondButton">See more</Button>
          </Link>
        </div>
      </div>

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
        <LinkContainer to="/artists">
          <Button className="gondButton">See all artists</Button>
        </LinkContainer>
      </div>

      <Container>
        <Row>
          <Col sm={4} className="logoBig">
            <img src="../images/GRlogo.png" height="300px" width="300px" />
          </Col>
          <Col sm={8}>
            <div className="aboutText">
              <h3>ABOUT</h3>
              <p>
                Gondwana Records is an independent record label based primarily
                in Manchester, England. Founded in 2008 by Matthew Halsall to
                shine a light on the talent Matthew heard in the local clubs,
                Gondwana has now grown into a truly international record label
                with offices in Berlin, London and Manchester and working with
                artists from America, Australia, Belgium, Denmark, England,
                Estonia and Poland. The label has released music by Allysha Joy,
                Caoilfhionn Rose, Chip Wickham, Dwight Trible, Forgiveness, GoGo
                Penguin, Hanakiv, Hania Rani, Jasmine Myra, John Ellis, Mammal
                Hands, Halsall, Nat Birchall, Noya Rao, Paradise Cinema, Phil
                France, Phi-Psonics, Portico Quartet, STUFF., Sunda Arc,
                Svaneborg Kardyb and Vega Trails.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="homeArtist">
        <Row>
          <h2>Video</h2>

          <Col className="home-video">
         <a href="https://www.youtube.com/watch?v=4GwqBQdBDRE" target="_blank">
             <img src="../images/MHvid.png" />
            <p>Matthew Halsall</p>
            </a> 
          </Col>
      
          <Col className="home-video">
          <a href="https://www.youtube.com/watch?v=6tgrzqbIeeI" target="_blank">
            <img src="../images/SKvid.png" />
            <p>Svaneborg Kardyb</p>  </a> 
          </Col>
          <Col className="home-video">
          <a href="https://www.youtube.com/watch?v=F9u-WhoSJd8" target="_blank">
            <img src="../images/JMvid.png" />
            <p>Jasmine Myra</p>  </a> 
          </Col>
        </Row>
        <Row>
          <Col className="home-video">
          <a href="https://www.youtube.com/watch?v=PzoctG9Qn94" target="_blank">
            <img src="../images/PQvid.png" />
            <p>Portico Quartet</p>  </a> 
          </Col>
          <Col className="home-video">
          <a href="https://www.youtube.com/watch?v=2RkGCEb3U0M" target="_blank">
            <img src="../images/HKvid.png" />
            <p>Hanakiv</p>  </a> 
          </Col>
          <Col className="home-video">
          <a href="https://www.youtube.com/watch?v=c5YkM374PAs" target="_blank">
            <img src="../images/VTvid.png" />
            <p>Vega Trails</p>  </a> 
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
