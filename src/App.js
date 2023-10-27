import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Body from "./components/Body";
import Carousels1 from "./components/Carousels1";
import Carousels2 from "./components/Carousels2";
import Carousels3 from "./components/Carousels3";
import ProvaIcons from "./components/ProvaIcons";
import MyClassComponent from "./components/MyClassComponent";
import WelcomeMessage from "./components/WelcomeMessage";
import WelcomeMessageClass from "./components/WelcomeMessageClass";
import { Carousel } from "react-bootstrap";

// la nomenclatura consigliata per i componenti React è la PascalCase (anche l'iniziale va maiuscola!)
function App() {
  return (
    <div className="App bg-black ">
      <Header className="bg-dark" />
      <Body className="bg-dark" />
      <Carousels1 className="bg-dark" title="Herbie" />
      <Carousels2 className="bg-dark" title="Wrong-turn" />
      <Carousels3 className="bg-dark" title="ip-man" />

      <Footer className="bg-dark " />
      {/* <ProvaIcons /> */}
    </div>
  );
}

export default App;
