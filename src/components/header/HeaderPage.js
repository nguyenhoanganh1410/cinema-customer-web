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
// import avt from "../../imgage/userIcon.jpg";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import avt from "../../imgage/av.jpg";
import { useEffect } from "react";
const { Text } = Typography;
const { Header, Content, Footer } = Layout;

function HeaderPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handScroll = () => {
      const header = document.querySelector(".header");

      if (window.scrollY > 50) {
        header.classList.add("color_black");
       // console.log(window.scrollY);
      } else {
        header.classList.remove("color_black");
      }
    };
    window.addEventListener("scroll", handScroll);

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);

  //redict login page
  const handleRedictLogin = () => {
    //redict
    // navigate("/login");
  };

  //click nav item
  const onClickMenuNav = (info) => {
    console.log(info);
    //if user click showtimes
    if (info.key === "showtimes") {
      navigate("/lich-chieu");
    } else if (info.key === "profile") {
    } else if (info.key === " setting") {
    } else if (info.key) {
      navigate("/");
    }
  };
  return (
    <Header
      className="header"
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
          onClick={onClickMenuNav}
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
                    <Text>T??i kho???n</Text>
                  </div>
                </Menu.Item>
                <Menu.Item key="logout">
                  <div>
                    <Text>????ng xu???t</Text>
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
