import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Dropdown,
  Typography,
} from "antd";
import "./Header.scss";

import { navData } from "../../data/data";
import logo from "../../imgage/logo.svg";
import avt from "../../imgage/userIcon.jpg";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

function HeaderPage() {
  const navigate = useNavigate();
  //redict login page
  const handleRedictLogin = () => {
    //redict
    // navigate("/login");
  };
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navData.map((value, index) => {
            const key = value.id;
            return {
              key,
              label: `${value.text}`,
            };
          })}
        />
      </div>

      <div className="user_block" onClick={handleRedictLogin}>
        <Dropdown
          overlay={
            <>
              <Menu>
                <Menu.Item key="profile">
                  <div>
                    <Text>Tài khoản</Text>
                  </div>
                </Menu.Item>
                <Menu.Item key="logout">
                  <div>
                    <Text>Đăng xuất</Text>
                  </div>
                </Menu.Item>
              </Menu>
            </>
          }
          trigger={["click"]}
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={(e) => e.preventDefault()}
          >
            <div className="block_avt">
              <img src={avt}></img>
            </div>
            <span>Anh Nguyen</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderPage;
