// import logo from './logo.svg';
import "./App.css";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Home from "../src/Components/Pages/Home";
import Header from "../src/Components/Layout/Header";
import About from "../src/Components/Pages/About";
import About2 from "../src/Components/Pages/About2";
import About3 from "../src/Components/Pages/About3";
import CardSection from "../src/Components/Pages/CardSection";
import Services from "../src/Components/Pages/Services";
import Blog from "../src/Components/Pages/Blog";
import Map from "../src/Components/Pages/Map";
import Footer from "../src/Components/Layout/Footer";
function App() {
  useEffect(() => {
    document.title = "Charity | template";
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <About2 />
      <CardSection />
      <About3 />
      <Services />
      <Blog />
      <Map />
      <Footer />
    </>
  );
}

export default App;
