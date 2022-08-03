import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Conteudo from "../pages/Conteudo/Conteudo";
import Bibliotecaqa from "../pages/Bibliotecaqa/Bibliotecaqa";
import Quiz from "../pages/Quiz/Quiz";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
function AplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guia" element={<Conteudo />} />
        <Route path="bibliotecaqa" element={<Bibliotecaqa />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AplicationRoutes;
