import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { navData } from "../data/data";
import logo from "../imgage/logo.svg";
import HeaderPage from "../components/header/HeaderPage";
import CarouselComponent from "../components/CarouselComponent";
import BanerFilms from "../components/film/BanerFilms";
import CardsComponent from "../components/ui/CardsComponent";
import PromotionComponent from "../components/ui/PromotionComponent";
import FooterComponent from "../components/ui/FooterComponent";

const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderPage />
      <CarouselComponent />
      <BanerFilms />
      <CardsComponent />
      <PromotionComponent />
      <FooterComponent />
      {/* <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content> */}
    </Layout>
  );
};
export default HomePage;
