import React from "react";
import { Card, Button, Typography } from "antd";
import film from "../../imgage/film_01.jpg";
import { DatabaseOutlined } from "@ant-design/icons";
import "./FilmCardStyle.scss";

const { Meta } = Card;
const { Text } = Typography;

const FilmCard = ({ showtimes }) => {
  const handleClick = () => {
    //click trong khi dang o trang lich-chieu

    //handle scrool 60px
    console.log("scrroollll");
    window.scrollTo({
      top: 500,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  return (
    <div className="card_film" onClick={() => handleClick()}>
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
          {showtimes ? null : (
            <Button
              type="primary"
              className="btn_muave"
              style={{
                marginTop: "1rem",
                width: "100%",
              }}
              icon={<DatabaseOutlined />}
            >
              Mua vé
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default FilmCard;
