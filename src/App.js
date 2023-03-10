import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ShowTimesPage from "./pages/ShowTimesPage";
import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lich-chieu" element={<ShowTimesPage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
