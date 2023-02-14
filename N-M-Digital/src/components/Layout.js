import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <div style={{
      backgroundImage:
      "url('https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?w=1380&t=st=1675787472~exp=1675788072~hmac=2b6cf8e20e89b57aa4d2cb919ed5e9b7248dd504f5190b4ea4ec3244051b498c')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    }}>
      <ToastContainer />
      <Header />
      <div
        style={{
          minHeight: `calc(100vh - 210px)`,
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
