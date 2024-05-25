import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh-110px)] pt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
