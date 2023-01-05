import React from "react";
import { Carousel } from "antd";
import visa from "../imgage/visa.jpg";
import app from "../imgage/App.jpg";
const contentStyle = {
  height: "100vh",
};
const CarouselComponent = () => (
  <Carousel autoplay>
    <div>
      <img
        src={app}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      ></img>
    </div>
    <div>
      <img
        src={visa}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      ></img>
    </div>
  </Carousel>
);
export default CarouselComponent;
