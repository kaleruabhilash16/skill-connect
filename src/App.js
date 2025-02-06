import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
