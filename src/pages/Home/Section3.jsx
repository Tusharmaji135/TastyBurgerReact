import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data02 from "../../data02";
import Cards from "../../components/Cards";

function Section3() {
  //Rating Logical data
  const renderRatingIcons =(rating)=>{
    const stars =[];
    for(let i=0;i<5;i++){
      if (rating>0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>)
        rating--;
      }else if(rating >0 && rating<1){
        stars.push(<i key={"half"} className="bi bi-star-half"></i>)
        rating--;
      }else{
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>)
      }
    }
    return stars;
  }
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ispum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>
        <Row>
          {data02.map(({ id, image, title, paragraph, rating, price }) => (
            <Cards
              key={id}
              image={image}
              title={title}
              paragraph={paragraph}
              rating={rating}
              price={price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>
        <Row className="pt-5">
          <Col sm={6} lg={5}>
          <div className="ads_box ads_img1 mb-5 mb-md-0">
            <h4 className="mb-0">GET YOUR FREE</h4>
            <h5>CHEESE FRIES</h5>
            <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
          </div>
          </Col>
          <Col sm={6} lg={7}>
          <div className="ads_box ads_img2">
            <h4 className="mb-0">GET YOUR FREE</h4>
            <h5>CHEESE BURGERS</h5>
            <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
