import React from "react";
import { Card, Button, Typography } from "antd";
import film from "../../imgage/film_01.jpg";
import { DatabaseOutlined } from "@ant-design/icons";
import "./FilmCardStyle.scss";
import { Link, useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Text } = Typography;

const FilmCard = ({ showTimes }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    //click trong khi dang o trang lich-chieu

    //handle scrool 60px
    if (showTimes) {
      console.log("scrroollll");
      window.scrollTo({
        top: 500,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
             in place of 'smooth' */
      });
    } else {
      //redict film detail
      console.log("abc");
      navigate("/movie");
    }
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
          {showTimes ? null : (
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
