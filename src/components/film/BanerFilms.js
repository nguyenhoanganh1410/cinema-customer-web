import "./BanerFilmStyle.scss";
import { Tabs } from "antd";
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
  return (
    <section className="banner_films">
      <Tabs
        defaultActiveKey="1"
        centered
        items={data?.map((value, i) => {
          const id = String(i + 1);
          return {
            label: `${value?.name}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
    </section>
  );
};

export default BanerFilms;
