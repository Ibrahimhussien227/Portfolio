import React from "react";
import {
  About,
  Header,
  Nav,
  Experience,
  Services,
  Portfolio,
  Contact,
  Footer,
  Qualification,
} from "./components";

const App = () => {
  return (
    <div className="gradient__bg">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Qualification />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
