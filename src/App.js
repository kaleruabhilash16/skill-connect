import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
