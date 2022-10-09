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
    // <div className="gradient__bg"></div>
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Qualification />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
