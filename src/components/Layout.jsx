import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-4 py-4 mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
