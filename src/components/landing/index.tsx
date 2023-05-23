import Home from "../template/Home";
import About from "./About";
import Advantage from "./Advantage";
import ConsultationInfo from "./ConsultationInfo";
import Footer from "./Footer";
import { Frase } from "./Frase";
import Header from "./Header";
import Main from "./Main";

export default function Landing() {
  return (
    <Home>
      <Header />
      <Main />
      <About />
      <Advantage />
      <ConsultationInfo />
      <Frase />
      <Footer />
    </Home>
  );
}
