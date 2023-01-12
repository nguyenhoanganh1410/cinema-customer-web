import { Row, Tabs, Typography, Col } from "antd";

import { useEffect, useState } from "react";
import locationIcon from "../../imgage/th.jpg";
import "./TheaterLocationStyle.scss";
const { Text, Title } = Typography;

const LocationComponent = () => {
  return (
    <div className="block_theater">
      <div className="block_theater-top">
        <Title className="threater_text" level={5}>
          BHD Star Phan Ngo Thanh
        </Title>
        <Text className="threater_text color_text">
          Tầng 8 vinhom center park
        </Text>
      </div>
      <div className="theater_location-bottom-gg">
        <img src={locationIcon} />
        <Text className="threater_text">Xem</Text>
      </div>
    </div>
  );
};

export default LocationComponent;
