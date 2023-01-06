import React from "react";
import { Card, Button, Typography, Row, Col, Divider } from "antd";

import "./CardsComponentStyle.scss";

const { Text, Title } = Typography;
const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <div>
                  <Title
                    style={{ color: "white", textAlign: "start" }}
                    level={4}
                  >
                    Về Cine Star
                  </Title>
                  <div className="block_text">
                    <Text className="footer_texxt">Hệ thống rạp</Text>
                    <Text className="footer_texxt">Tuyển dụng</Text>
                    <Text className="footer_texxt">Liên hệ</Text>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <Title
                    style={{ color: "white", textAlign: "start" }}
                    level={4}
                  >
                    Quy định và điều khoản
                  </Title>
                  <div className="block_text">
                    <Text className="footer_texxt">Quy định thành viên</Text>
                    <Text className="footer_texxt">Điều khoản</Text>
                    <Text className="footer_texxt">
                      Hướng dẫn đặt vé trực tuyến
                    </Text>
                    <Text className="footer_texxt">
                      Quy định và chính sách chung
                    </Text>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}></Col>
        </Row>
        <Divider />
        <Text style={{ color: "white", marginBottom: "2rem" }}>
          © 2022 by IUH
        </Text>
      </div>
    </footer>
  );
};
export default FooterComponent;
