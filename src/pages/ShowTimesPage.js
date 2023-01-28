import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { navData } from "../data/data";
import logo from "../imgage/logo.svg";
import HeaderPage from "../components/header/HeaderPage";
import CarouselComponent from "../components/CarouselComponent";
import BanerFilms from "../components/film/BanerFilms";
import CardsComponent from "../components/ui/CardsComponent";
import PromotionComponent from "../components/ui/PromotionComponent";
import FooterComponent from "../components/ui/FooterComponent";
import "date-carousel/date-carousel.js";

const { Header, Content, Footer } = Layout;
const ShowTimesPage = () => {
  const [showTimes, setShowTimes] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderPage />

      <BanerFilms showTimes={showTimes} />

      <PromotionComponent />
      <FooterComponent />
    </Layout>
  );
};
export default ShowTimesPage;
