import { type FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import FavoritesPage from "./pages/favorites-page";
import MovieDetail from "./pages/movie-detail";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#072644] text-white p-5 lg:p-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
