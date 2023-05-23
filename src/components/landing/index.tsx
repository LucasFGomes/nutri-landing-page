import Home from "../template/Home";
import About from "./About";
import Advantage from "./Advantage";
import Citation from "./Citation";
import ConsultationInfo from "./ConsultationInfo";
import Footer from "./Footer";
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
      <Citation />
      <Footer />
    </Home>
  );
}
