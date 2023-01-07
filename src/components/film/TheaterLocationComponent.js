import { Row, Tabs, Typography, Col } from "antd";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import locationIcon from "../../imgage/th.jpg";
import "./TheaterLocationStyle.scss";
const { Text, Title } = Typography;
const cities = [
  {
    id: "tphcm",
    name: "TP Hồ chí minh",
    code: 1,
  },
  {
    id: "tphn",
    name: "TP Hà nội",
    code: 2,
  },
];
const TheaterLocationComponent = () => {
  const [city, setCity] = useState(1);
  //event click city
  const handleChoiseCity = (city) => {
    if (city.code === 1) {
      setCity(1);
    } else if (city.code === 2) {
      setCity(2);
    }
  };
  return (
    <section className="theater_location">
      <div className="container">
        <div className="theater_location-top">
          {cities.map((val) => {
            return (
              <div
                className={`block_location ${
                  city === val.code ? "active" : null
                }`}
                key={val.id}
                onClick={() => handleChoiseCity(val)}
              >
                <img src={locationIcon} />
                <Text className="block_location-text">{val.name}</Text>
              </div>
            );
          })}
        </div>

        <div className="theater_location-bottom">
          <Row style={{ margin: "2rem 0" }} gutter={[24, 24]}>
            <Col span={6}>
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
            </Col>
            <Col span={6}>
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
            </Col>
            <Col span={6}>
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
            </Col>
            <Col span={6}>
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
            </Col>
            <Col span={6}>
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
            </Col>
            <Col span={6}>
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
            </Col>
            <Col span={6}>
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
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default TheaterLocationComponent;
