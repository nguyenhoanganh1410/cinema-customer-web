import "./BanerFilmStyle.scss";
import { Tabs } from "antd";
import FilmCard from "./FilmCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
const data = [
  {
    id: "tab01",
    name: "Phim đang chiếu",
  },
  {
    id: "tab02",
    name: "Phim sắp chiếu",
  },
];
const BanerFilms = () => {
  //items in carousel
  const [items, setItems] = useState(5);

  useEffect(() => {
    const widthScreen = window.innerWidth;
    if (widthScreen < 768) {
      setItems(1);
    } else if (widthScreen > 1100) {
      setItems(5);
    } else if (widthScreen > 768 && widthScreen < 992) {
      setItems(2);
    }
    const handleResize = () => {
      const widthScreen = window.innerWidth;
      if (widthScreen < 768) {
        setItems(1);
      } else if (widthScreen > 1100) {
        setItems(5);
      } else if (widthScreen > 768 && widthScreen < 992) {
        setItems(2);
      }
    };
    window.addEventListener("resize", handleResize);

    //clean up func
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const ListFilm = () => {
    return (
      <OwlCarousel items={items} className="owl-theme" loop autoplay={true}>
        {data.map((val) => {
          return <FilmCard />;
        })}
      </OwlCarousel>
    );
  };
  return (
    <section className="banner_films">
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: `Phim đang chiếu`,
            key: "1",
            children: <ListFilm />,
          },
          {
            label: `Phim sắp chiếu`,
            key: "2",
            children: <ListFilm />,
          },
        ]}
      />
    </section>
  );
};

export default BanerFilms;
