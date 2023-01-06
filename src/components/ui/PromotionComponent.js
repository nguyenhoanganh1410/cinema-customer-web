import React from "react";
import { Col, Row, Button, Typography } from "antd";
import promotion01 from "../../imgage/pro1.png";
import promotion02 from "../../imgage/pro2.png";
import promotion03 from "../../imgage/pro3.jpg";
import "./CardsComponentStyle.scss";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const data = [
  { id: 111, name: "abc", img: promotion01 },
  { id: 222, name: "2222", img: promotion02 },
  { id: 333, name: "2222", img: promotion03 },
];

const { Title } = Typography;
const PromotionComponent = () => {
  return (
    <section className="section-promotion">
      <div className="container">
        <div className="section-promotion-title">
          <Title level={2} style={{ color: "#bcdc95", marginBottom: "2rem" }}>
            Khuyến mãi | Sự kiện
          </Title>
        </div>
        <Row gutter={[0, 24]}>
          <Col lg={24}>
            <OwlCarousel items={3} className="owl-theme" loop autoplay={true}>
              {data?.map((val) => {
                return (
                  <div
                    key={val.id}
                    style={{ padding: "0 0.6rem", cursor: "pointer" }}
                    className="block-pro"
                  >
                    <img src={val.img} />
                  </div>
                );
              })}
            </OwlCarousel>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default PromotionComponent;
