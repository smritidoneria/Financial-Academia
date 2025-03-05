import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StaggeredDropDown from "./components/ChatBot";
import { useSelector } from "react-redux";

const Layout = () => {
  const token = localStorage.getItem("token");
  const isNavBarOpen = useSelector((state) => state.ui.isNavBarOpen);

  return (
    <>
      {token && <NavBar />}
      {!isNavBarOpen && (
        <>
          <Outlet />
          {token && (
            <div className="fixed bottom-12 right-36">
              <StaggeredDropDown />
            </div>
          )}
          {token && <Footer />}
        </>
      )}
    </>
  );
};

export default Layout;