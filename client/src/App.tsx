import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainRoute />

      <Footer />
    </div>
  );
}

export default App;
