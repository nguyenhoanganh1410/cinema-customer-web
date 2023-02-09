import "./BanerFilmStyle.scss";
import { Row, Tabs, Col, Typography, Button } from "antd";
import FilmCard from "./FilmCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import TheaterLocationComponent from "./TheaterLocationComponent";
import image from "../../imgage/film_01.jpg";
import LocationComponent from "./LocationComponent";

import moment from "moment";

const dateFormat = "DD-MM";

const { Text, Title } = Typography;
const data = [
  {
    id: "tab01",
    name: "Phim đang chiếu",
  },
  {
    id: "tab02",
    name: "Phim sắp chiếu",
  },
];

const caculatorDay = (dateNumber) => {
  let day = "";
  switch (dateNumber) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ 2";
      break;
    case 2:
      day = "Thứ 3";
      break;
    case 3:
      day = "Thứ 4";
      break;
    case 4:
      day = "Thứ 5";
      break;
    case 5:
      day = "Thứ 6";
      break;
    case 6:
      day = "Thứ bảy";
  }

  return day;
};

const RenderDateList = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [active, setActive] = useState(0);
  const handleClickDate = (val) => {
    setActive(val);
  };

  return (
    <div className="blocks-time">
      {arr.map((val, idx) => {
        if (idx === 0) {
          return (
            <div
              className={active === val ? "block-time active" : "block-time"}
              onClick={() => handleClickDate(val)}
            >
              <span>{caculatorDay(moment().day())} </span>
              <span className="date-span">{moment().format(dateFormat)}</span>
            </div>
          );
        }
        return (
          <div
            className={active === val ? "block-time active" : "block-time"}
            onClick={() => handleClickDate(val)}
          >
            <span>{caculatorDay(moment().add(val, "days").day())} </span>
            <span className="date-span">
              {moment().add(val, "days").format(dateFormat)}
            </span>
          </div>
        );
      })}
    </div>
  );
};
const BanerFilms = ({ showTimes }) => {
  //items in carousel
  const [items, setItems] = useState(5);

  useEffect(() => {
    const widthScreen = window.innerWidth;
    if (widthScreen < 768) {
      setItems(1);
    } else if (widthScreen > 1100) {
      setItems(5);
    } else if (widthScreen > 768 && widthScreen < 992) {
      setItems(2);
    }
    const handleResize = () => {
      const widthScreen = window.innerWidth;
      if (widthScreen < 768) {
        setItems(1);
      } else if (widthScreen > 1100) {
        setItems(5);
      } else if (widthScreen > 768 && widthScreen < 992) {
        setItems(2);
      }
    };
    window.addEventListener("resize", handleResize);

    //clean up func
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const ListFilm = () => {
    return (
      <div className="container">
        <OwlCarousel items={items} className="owl-theme" loop autoplay={true}>
          {data.map((val) => {
            return <FilmCard showTimes={showTimes} />;
          })}
        </OwlCarousel>
      </div>
    );
  };
  return (
    <section className="banner_films">
      {showTimes ? (
        <Tabs
          defaultActiveKey="1"
          centered
          items={[
            {
              label: `Lịch chiếu theo phim`,
              key: "1",
              children: <ListFilm />,
            },
            {
              label: `Lịch chiếu theo rạp`,
              key: "2",
              children: <TheaterLocationComponent />,
            },
          ]}
        />
      ) : (
        <Tabs
          defaultActiveKey="2"
          centered
          items={[
            {
              label: `Phim đang chiếu`,
              key: "1",
              children: <ListFilm />,
            },
            {
              label: `Phim sắp chiếu`,
              key: "2",
              children: <ListFilm />,
            },
          ]}
        />
      )}
      {showTimes ? (
        <div className="film_choise">
          <Row className="container">
            <Col span={4}>
              <div className="film_choise-imgae">
                <img src={image}></img>
              </div>
            </Col>
            <Col span={20} className="film_choise-content">
              <Title level={3} style={{ color: "white" }}>
                Thanh Soi
              </Title>
              <div className="block_title">
                <span>2D</span>
              </div>
              <Text style={{ color: "#a6b2c9" }}>
                Một tác phẩm hành động thuộc "vũ trụ" Hai Phượng. Phim là câu
                chuyện về thời trẻ của nữ trùm "Thanh Sói", mang đến hành trình
                hắc hóa từ 1 đứa trẻ ngây thơ thành tội phạm khét tiếng nhất Sài
                Gòn
              </Text>
            </Col>
          </Row>
          <Row
            className="container"
            style={{ marginTop: "4rem", marginBottom: "4rem" }}
          >
            <Col span={24}>
              <RenderDateList />
            </Col>
          </Row>
          <Row className="container" style={{ marginBottom: "4rem" }}>
            <Col span={5}>
              <LocationComponent />
            </Col>
            <Col span={1}></Col>
            <Col span={18}>
              <Row>
                <Col span={1}>
                  <div>
                    {" "}
                    <div className="block_title">
                      <span>2D</span>
                    </div>
                    <div className="block_title">
                      <span>3D</span>
                    </div>
                  </div>
                </Col>
                <Col span={1}></Col>
                <Col
                  span={20}
                  style={{
                    textAlign: "start",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="container" style={{ marginBottom: "4rem" }}>
            <Col span={5}>
              <LocationComponent />
            </Col>
            <Col span={1}></Col>
            <Col span={18}>
              <Row>
                <Col span={1}>
                  <div>
                    {" "}
                    <div className="block_title">
                      <span>2D</span>
                    </div>
                    <div className="block_title">
                      <span>3D</span>
                    </div>
                  </div>
                </Col>
                <Col span={1}></Col>
                <Col
                  span={20}
                  style={{
                    textAlign: "start",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                  <div className="group_time">
                    <Button className="btn_time">16:00</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      ) : null}
    </section>
  );
};

export default BanerFilms;
