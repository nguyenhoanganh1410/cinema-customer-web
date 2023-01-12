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
import FilmDetailsComponent from "../components/film/FilmDetailsComponent";

const { Header, Content, Footer } = Layout;
const MoviePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderPage />
      <FilmDetailsComponent />
      <FooterComponent />
    </Layout>
  );
};
export default MoviePage;
