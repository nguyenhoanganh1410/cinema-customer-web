import React from "react";
import { Col, Row, Button } from "antd";
import diamond from "../../imgage/DIAMOND.png";
import gold from "../../imgage/GOLD.png";
import star from "../../imgage/STAR.png";
import "./CardsComponentStyle.scss";
import imageTitle from "../../imgage/bg-title-bhd-member.png";

const CardsComponent = () => {
  return (
    <section className="section-member">
      <div className="section-member-title">
        <img src={imageTitle} />
      </div>
      <Row gutter={[0, 24]}>
        <Col sm={24} lg={8}>
          <div>
            <img src={star} />
          </div>
        </Col>
        <Col sm={24} lg={8}>
          <div>
            <img src={gold} />
          </div>
        </Col>

        <Col sm={24} lg={8}>
          <div>
            <img src={diamond} />
          </div>
        </Col>
      </Row>
      <Button className="btn-dangky" type="primary">
        Đăng ký ngay
      </Button>
    </section>
  );
};
export default CardsComponent;
