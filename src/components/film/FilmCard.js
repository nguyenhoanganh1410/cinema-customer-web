import React from "react";
import { Card, Button, Typography } from "antd";
import film from "../../imgage/film_01.jpg";
import { DatabaseOutlined } from "@ant-design/icons";
import "./FilmCardStyle.scss";

const { Meta } = Card;
const { Text } = Typography;
const FilmCard = () => (
  <div className="card_film">
    <div className="card_film-top">
      <img src={film} />
    </div>
    <div className="card_film-bottom">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="card_film-text">
          to learn more about learn more about each error.
        </Text>
        <Button
          type="primary"
          style={{ marginTop: "1rem", width: "100%" }}
          icon={<DatabaseOutlined />}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  </div>
);
export default FilmCard;
