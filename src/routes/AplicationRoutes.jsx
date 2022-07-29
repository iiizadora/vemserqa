import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Conteudo from "../pages/Conteudo/Conteudo";
import Aprendizado from "../pages/Aprendizado/Aprendizado";
import Quiz from "../pages/Quiz/Quiz";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
function AplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carreira" element={<Conteudo />} />
        <Route path="bibliotecaqa" element={<Aprendizado />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AplicationRoutes;
