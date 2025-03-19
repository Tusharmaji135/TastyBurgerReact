import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data01 from "../../data01";

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-center">
            {data01.map(({ image, title, paragraph }, i) => (
              <Col md={6} lg={4} className="mb-4 md-0" key={i}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={image} className="img-fluid" alt="icon" />
                  </div>
                  <h4>{title}</h4>
                  <p>{paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
