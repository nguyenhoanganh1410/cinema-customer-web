import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import film from "../../imgage/film_01.jpg";
import { DatabaseOutlined } from "@ant-design/icons";
import "./FilmDetailsStyle.scss";

const { Meta } = Card;
const { Text, Title } = Typography;
const FilmDetailsComponent = () => (
  <div className="film_details">
    <div className="container">
      <Row>
        <Col span={8}>
          <div className="detail_block">
            <img src={film}></img>
          </div>
        </Col>
        <Col span={16}>
          <div className="detail_block_content">
            <Title level={2} className="content_title">
              Thanh Soi
            </Title>
            <Text className="content_text">
              Một tác phẩm hành động thuộc "vũ trụ" Hai Phượng. Phim là câu
              chuyện về thời trẻ của nữ trùm "Thanh Sói", mang đến hành trình
              hắc hóa từ 1 đứa trẻ ngây thơ thành tội phạm khét tiếng nhất Sài
              Gòn
            </Text>
            <div className="text_content">
              <Text className="text_content-title">Đạo diễn</Text>
              <Text className="text_content-text">Anh Nguyen</Text>
            </div>
            <div className="text_content">
              <Text className="text_content-title">Diễn viên</Text>
              <Text className="text_content-text">
                Ma Dong Seok, Jung Kyung Ho
              </Text>
            </div>
            <div className="text_content">
              <Text className="text_content-title">Thể loại</Text>
              <Text className="text_content-text">Comedy</Text>
            </div>
            <div className="text_content">
              <Text className="text_content-title">Khởi chiếu</Text>
              <Text className="text_content-text">2023-01-06</Text>
            </div>
            <div className="text_content">
              <Text className="text_content-title">Thời lượng</Text>
              <Text className="text_content-text">120 phút</Text>
            </div>
            <div className="text_content">
              <Text className="text_content-title">Ngôn ngữ</Text>
              <Text className="text_content-text">Phụ đề tiếng việt</Text>
            </div>

            <div className="btn_group">
              <Button
                type="primary"
                className="btn_muave"
                style={{
                  marginTop: "1rem",
                  width: "100%",
                }}
                icon={<DatabaseOutlined />}
              >
                XEM TRAILER
              </Button>
              <Button
                type="primary"
                className="btn_muave"
                style={{
                  marginTop: "1rem",
                  width: "100%",
                }}
                icon={<DatabaseOutlined />}
              >
                MUA VÉ NGAY
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
export default FilmDetailsComponent;
